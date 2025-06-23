const 

 express = require("express"),
//  auth = require("../middlewares/auth"),
 router = express.Router(),
//  passport = require("passport"),
//  PhotosController = require("../controllers/photosController"),
 PhotosController = require("../../controllers/controles/photosController"),
 multer = require("multer"),
 storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
  }
});
const upload = multer({
  storage: storage,
  fileFilter: function(req, file, callback) {
    console.log(file.mimetype)
    if (
      file.mimetype !== "image/png" &&
      file.mimetype !== "image/jpg" &&
      file.mimetype !== "image/jpeg" && 
      file.mimetype !== "image/svg+xml" && 
      file.mimetype !== "video/mp4" && 
      file.mimetype !== "application/pdf" && //for .pdf format
      file.mimetype !== "application/msword" && // for .doc
      file.mimetype !== "text/plain" && //for .txt
      file.mimetype !== "application/vnd.openxmlformats-officedocument.wordprocessingml.document" // for .docx format  
    ) {
      return callback(new Error("Only images and docs formats are allowed"));
    }
    callback(null, true);
  },
  limits: {
    fileSize: 1024 * 1024 * 5
  }
});

 

 //Route to add a photo to an album
router.post("/:id",  upload.array("photoImage"),  PhotosController.AddPhotoToAlbum );

//Route to get photos of an album
router.get("/:id", PhotosController.GetPhotosOfAnAlbum);

router.get("/files/photos", PhotosController.GetAllFiles);
  
//route to edit a photo
router.put("/:id",
                   upload.single("photoImage"), PhotosController.EditPhoto);

//Route to get a particular photo by Id
router.get("/photo/:photo_id", PhotosController.GetSelectedPhotoById);
  
//Route to delete a photo
router.delete("/:id/:photo_id",
               PhotosController.DeletePhoto);

//Route to like albums
router.post("/like/:photo_id", 
                               PhotosController.PostLikeAlbums );

//Route to unlike the albums
router.post("/:id/unlike/:photo_id", 
                                    PhotosController.PostUnlikeTheAlbums );

//Route to add comments to a photo
router.post("/:id/comment/:photo_id", 
           
               PhotosController.AddCommentsToAPhoto);

//Route to delete a comment
router.delete(
               "/:id/comment/:photo_id/:comment_id",
           
                PhotosController.DeleteAComment );
  

module.exports = router;