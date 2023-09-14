const multer = require("multer");
const { MongoClient } = require("mongodb");
const GridFsStorage = require("multer-gridfs-storage");
const dotenv = require("dotenv");

dotenv.config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true });

const storage = new GridFsStorage({
  url: uri,
  file: (req, file) => {
    return {
      filename: file.originalname,
    };
  },
});

const upload = multer({ storage });

module.exports = upload.single("image");
