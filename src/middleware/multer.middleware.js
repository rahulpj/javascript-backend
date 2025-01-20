import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    // after adding unique suffix to keep every file distinct
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage: storage });
