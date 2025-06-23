const
  // PhotosController = require("../controllers/photosController"),
  Album = require("../../models/controles/albums"),
  Photo = require("../../models/controles/photos"),
  mongoose = require("mongoose"),
  // auth = require("../middlewares/auth"),
  // passport = require("passport"),
  multer = require("multer"),
  storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads/");
    },
    filename: function (req, file, cb) {
      cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
    }
  });
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    if (
      file.mimetype !== "image/png" &&
      file.mimetype !== "image/jpg" &&
      file.mimetype !== "image/jpeg"
    ) {
      return callback(new Error("Solo se permiten imágenes"));
    }
    callback(null, true);
  },
  limits: {
    fileSize: 1024 * 1024 * 5
  }
});

// Export object literal with all controller actions.
module.exports = {

  //Action to add a photo to an album

  AddPhotoToAlbum: async (req, res) => {
    // Find the album by the id
    let pri;
    const uid = req.uid;
    // console.log(req)

    // Validate request
    if (req.files.length === 0) {
      return res.status(400).json({ photo: "El archivo es obligatorio" });
    }

    pri = req.body.privacy === "" ? "public" : req.body.privacy;

    const album = await Album.findOne({ _id: req.params.id });
    console.log("album:", album.title);

    // Store promises for saving photos
    const savePhotoPromises = req.files.map(file => {
      const newPhoto = new Photo({
        description: req.body.description,
        photoImage: file.path,
        album: req.params.id,
        user: uid,
        privacy: pri,
      });
      console.log("photo:", newPhoto);

      // Save the photo and update the album photos array
      album.photo.unshift({ photo: newPhoto._id });
      return newPhoto.save();
    });

    try {
      // Wait for all photos to be saved
      const photoResponses = await Promise.all(savePhotoPromises);

      // Save the album after all photos have been added
      await album.save();

      // Send the response back to the client
      res.json(photoResponses);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Se produjo un error al cargar las fotos." });
    }
  },

  //Action to get photos of an album
  GetPhotosOfAnAlbum: async (req, res) => {
    //find the album
    const album = await Album.findById(req.params.id);
    console.log("req.user", req.user);
    console.log("album.privacy", album.privacy);
    //if user is not logged in
    if (req.user == null) {
      if (album.privacy == "private")
        return res.status(404).json({ notfound: "Album is private" });
      else if (album.privacy == "public") {
        const photos = await Photo.find({
          album: req.params.id,
          privacy: "public"
        });
        return res.json(photos);
      } else if (album.privacy == "shareable") {
        return res.status(404).json({ notfound: "Album is shareable" });
      }
    }
    //if user is logged in
    else {
      //if album is private and is of the user then send all the pictures
      if (album.privacy == "private") {
        if (album.user == req.user.id) {
          //send all the photos
          const photos = await Photo.find({ album: req.params.id });
          return res.json(photos);
        } else {
          return res.status(404).json({ notfound: "Album is private" });
        }
      } else if (album.privacy == "public") {
        if (album.user == req.user.id) {
          const photos = await Photo.find({ album: req.params.id });
          console.log("photosss", photos);
          return res.json(photos);
        } else {
          const photos = await Photo.find({
            album: req.params.id,
            privacy: "public"
          });
          console.log("photosss1", photos);
          return res.json(photos);
        }
      } else {
        //sharable album
        if (album.user == req.user.id) {
          const photos = await Photo.find({ album: req.params.id });
          return res.json(photos);
        } else {
          const photos = await Photo.find({
            album: req.params.id,
            privacy: "public"
          });
          return res.json(photos);
        }
      }
    }
  },


  //Action to get all files
  GetAllFiles: async (req, res) => {
    try {
      // Log the whole query object directly
      console.log("Received query parameters:", req);

      // Extract classifier1, classifier2, and albumId from query parameters
      const { classifier1, classifier2, albumId } = req.query;

      // Log individual parameters to verify their values
      console.log("Classifier1:", classifier1);
      console.log("Classifier2:", classifier2);
      console.log("AlbumId:", albumId);

      // Build the query object based on provided filters
      let query = {};

      if (albumId) {
        query.album = albumId; // Filter by album
      }

      if (classifier1) {
        query.classifier1 = classifier1; // Filter by classifier1
      }

      if (classifier2) {
        query.classifier2 = classifier2; // Filter by classifier2
      }

      // Find photos based on the constructed query
      const photos = await Photo.find(query);

      // Return the filtered photos
      return res.json(photos);
    } catch (error) {
      console.error("Error fetching photos:", error);
      return res.status(500).json({ message: "Error Interno del Servidor" });
    }
  },




  //Action to edit a photo

  EditPhoto: async (req, res) => {
    console.log("body", req.body);

    const photo = await Photo.findById(req.params.id);

    if (!photo)
      return res.status(404).json({ notFoun: "El archivo no existe" });

    photo.description = req.body.description;
    photo.privacy = req.body.privacy;
    if (req.file !== undefined) {
      photo.photoImage = req.file.path;
    }
    if (req.body.classifier1) {
      photo.classifier1 = req.body.classifier1;
    }
    if (req.body.classifier2) {
      photo.classifier2 = req.body.classifier2;
    }
    const result = await photo.save();
    res.json(result);
  },

  //Action to get a particular photo by Id

  GetSelectedPhotoById: async (req, res) => {
    //find the photo
    var photo = await Photo.findById(req.params.photo_id).populate('classifier1')
      .populate('classifier2');


    //find the album
    var album = await Album.findById(photo.album);
    console.log("albumf", album);
    console.log("req.user", req.user);
    console.log("photo", photo);
    //if user is not logged in
    if (req.user === null) {
      console.log("albumf1", album.privacy);
      console.log("zero1");
      if (album.privacy === "private") {
        console.log("zero");
        return res.status(404).json({ notFound: "Album is private" });
      } else if (album.privacy === "public") {
        console.log("one");
        if (photo.privacy === "private") {
          console.log("two");
          return res.status(404).json({ notFound: "Photo is private" });
        } else if (photo.privacy == "public") {
          return res.json(photo);
        } else {
          return res.json(photo);
        }
      }
    }
    //user is logged in
    else {
      //   console.log("albumf1", album);

      //if album is of user do not check anything send the photo..
      if (req.user.id == album.user) {
        return res.json(photo);
      } else {
        if (album.privacy === "private") {
          return res.status(404).json({ notFound: "Album is private" });
        } else if (album.privacy == "public") {
          if (photo.privacy == "private") {
            return res.status(404).json({ notFound: "Photo is private" });
          } else if (photo.privacy == "public") {
            return res.json(photo);
          } else {
            return res.json(photo);
          }
        } else { return res.json(photo); }
      }
    }
  },

  //Action to delete a photo

  DeletePhoto: async (req, res) => {
    const photo = await Photo.findById(req.params.photo_id);
    const album = await Album.findById(req.params.id);
    console.log("photo", photo);
    console.log("album", album);
    if (album.user.toString() != req.user.id) {
      return res.status(401).json({ unauthorized: "Usuario no autorizada" });
    } else {
      //delete the photo
      Photo.findByIdAndRemove(req.params.photo_id).then(() => {
        res.json({ success: true });
      });

      //remove the photo from album
      const removeIndex = album.photo
        .map(item => item.photo.toString())
        .indexOf(req.params.photo_id);
      album.photo.splice(removeIndex, 1);
      album.save().then(resp => {
        console.log(resp);
      });
    }
  },

  //Action to like albums

  PostLikeAlbums: async (req, res) => {
    const photo = await Photo.findById(req.params.photo_id);
    console.log("photo", photo);
    //checking if user has already liked the post
    var found = false;
    for (var i = 0; i < photo.likes.length; i++) {
      if (photo.likes[i].user == req.user.id) {
        found = true;
        removeIndex = i;
        break;
      }
    }
    console.log("found", found);

    if (found) {
      //remove the user from likes array
      //Get remove Index
      console.log("index", removeIndex);
      //Splice out
      photo.likes.splice(removeIndex, 1);
      photo.save().then(photo1 => res.json(photo1));
    } else {
      //Add the user id to likes array
      photo.likes.unshift({ user: req.user.id });
      photo.save().then(photo => res.json(photo));
    }
  },

  //Action to unlike the albums
  PostUnlikeTheAlbums: async (req, res) => {
    const photo = await Photo.findById(req.params.photo_id);
    //checking if user has already liked the post
    if (
      photo.likes.filter(like => like.user.toString() === req.user.id)
        .length === 0
    ) {
      return res
        .status(400)
        .json({ notLiked: "user has not liked this photo" });
    } else {
      //remove the user from likes array
      //Get reomve Indes
      const removeIndex = photo.likes
        .map(item => item.user.toString())
        .indexOf(req.user);

      //Splice out
      photo.likes.splice(removeIndex, 1);
      photo.save().then(photo => res.json(photo));
    }
  },

  //Action to add comments to a photo

  AddCommentsToAPhoto: async (req, res) => {
    const photo = await Photo.findById(req.params.photo_id);
    const newComment = {
      text: req.body.text,
      user: req.body.user,
      user: req.user.id
    };
    photo.comments.unshift(newComment);
    photo.save().then(newPhoto => res.json(newPhoto));
  },

  //Action to delete a comment

  DeleteAComment: async (req, res) => {
    const photo = await Photo.findById(req.params.photo_id);
    if (
      photo.comments.filter(
        comment => comment._id.toString() === req.params.comment_id
      ).length === 0
    ) {
      return res.status(404).json({ notfound: "comments not found" });
    } else {
      //remove the user from likes array
      //Get reomve Indes
      const removeIndex = photo.comments
        .map(item => item._id.toString())
        .indexOf(req.params.comment_id);

      //Splice out
      photo.comments.splice(removeIndex, 1);
      photo.save().then(photo => res.json(photo));
    }
  }


}