const 

 express = require("express"),
//  auth = require("../middlewares/auth"),
 router = express.Router(),
//  passport = require("passport"),
//  ArchivosController = require("../controllers/archivosController"),
 ArchivosController = require("../../controllers/controles/archivosController"),
 multer = require("multer"),
 storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    const originalnameSE =  file.originalname.replace(/\s+/g, '');

    console.log(file)
    cb(null, new Date().toISOString().replace(/:/g, "-") + originalnameSE);



  }
});

const { validarCampos } = require('../../middlewares/validar-campos');

const { validarJWT } = require('../../middlewares/validar-jwt');


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
      file.mimetype !== "application/vnd.openxmlformats-officedocument.wordprocessingml.document" && // for .docx format  
      file.mimetype !== "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      return callback(new Error("Only images and docs formats are allowed"));
    }
    callback(null, true);
  },
  // limits: {
  //   fileSize: 1024 * 1024 * 5
  // }
});

 

 //Route to add a photo to an album
// router.post("/:id", [
//   validarJWT,
//   validarCampos
// ],  upload.array("photoImage"),  ArchivosController.AddArchivosTo );

router.post("/:id", [
  validarJWT,
  validarCampos
],  upload.array("photoImage"),  ArchivosController.AddArchivosTo );


//Route to get archivos of an album
router.get("/:id", ArchivosController.GetArchivossOfAn);

router.get("/files/archivos", ArchivosController.GetAllFiles);
  
//route to edit a photo
router.put("/:id",
                   upload.single("photoImage"), ArchivosController.EditArchivos);

//Route to get a particular photo by Id
router.get("/photo/:photo_id", ArchivosController.GetSelectedArchivosById);
  
//Route to delete a photo
router.delete("/:id/:photo_id",
               ArchivosController.DeleteArchivos);

//Route to like albums
router.post("/like/:photo_id", 
                               ArchivosController.PostLikeAlbums );

//Route to unlike the albums
router.post("/:id/unlike/:photo_id", 
                                    ArchivosController.PostUnlikeTheAlbums );

//Route to add comments to a photo
router.post("/:id/comment/:photo_id", 
           
               ArchivosController.AddCommentsToAArchivos);

//Route to delete a comment
router.delete(
               "/:id/comment/:photo_id/:comment_id",
           
                ArchivosController.DeleteAComment );
  

module.exports = router;