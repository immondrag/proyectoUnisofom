
  const express = require("express"),
  router = express.Router(),
  AlbumsController = require("../../controllers/controles/albumsController"),
  multer = require("multer");

//const validateCreateAlbumInput = require("../validator/create-album");
const storage = multer.diskStorage({
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

console.log("Estoy en albumsRoutes - line 37")
//Route to create a new Album
router.post("/",
  upload.single("coverImage"), AlbumsController.CreateANewAlbum);

//Route to get all the albums
router.get("/",  AlbumsController.GetAllAlbums);

//Route to get album by Id
router.get("/:id",  AlbumsController.GetAlbumById);

//Route to update an album
router.put("/:id",
  upload.single("coverImage"), AlbumsController.UpdateAlbum);

//Route to delete an album
router.delete("/:id",
  AlbumsController.DeleteAlbum);

//Route to like albums
router.post("/like/:id",  AlbumsController.LikeAlbums);

//Route to like albums
router.post("/like/:id",
  AlbumsController.LikeAlbums);

//Route to unlike the albums
router.post("/unlike/:id",
  AlbumsController.UnlikeAlbums);


//Route to add comments to a post
router.post("/comment/:id",
  AlbumsController.AddCommentsToAPost);

//Route to delete a comment
router.delete(
  "/comment/:id/:comment_id",
  AlbumsController.DeleteAComment);

module.exports = router;