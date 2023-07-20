const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },

  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_");
    const extension = file.originalname.split(".").pop();
    const timestamp = Date.now();
    callback(null, name + "_" + timestamp + "." + extension);
  },
});

const fileFilter = (req, file, callback) => {
  const allowedMimeTypes = ["image/jpg", "image/jpeg", "image/png"];
  if (allowedMimeTypes.includes(file.mimetype)) {
    callback(null, true);
  } else {
    callback(
      new Error(
        "Invalid file type. Only JPG, JPEG, and PNG images are allowed."
      )
    );
  }
};

module.exports = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 3, // 3MB max file
  },
  fileFilter: fileFilter,
}).array("images", 3);
