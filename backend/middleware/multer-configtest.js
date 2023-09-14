// const multer = require("multer");
// const { MongoClient } = require("mongodb");
// const GridFsStorage = require("multer-gridfs-storage");
// const dotenv = require("dotenv");

// dotenv.config();

// const uri = process.env.MONGODB_URI;
// const client = new MongoClient(uri, { useNewUrlParser: true });

// const storage = new GridFsStorage({
//   url: uri,
//   file: (req, file) => {
//     return {
//       filename: file.originalname,
//     };
//   },
// });

// const upload = multer({ storage });

// module.exports = upload.single("image");

const multer = require("multer");
const { MongoClient } = require("mongodb");
const Grid = require("gridfs-stream");
const dotenv = require("dotenv");

dotenv.config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true });

let gfs;

client.connect((err) => {
  if (err) {
    console.error("Erreur de connexion à MongoDB :", err);
    process.exit(1);
  }
  gfs = Grid(client.db, require("mongodb"));
  gfs.collection("images"); // Nom de la collection GridFS
});

const storage = multer.memoryStorage();

const upload = multer({ storage });

module.exports = upload.single("image");
