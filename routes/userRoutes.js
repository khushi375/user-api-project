const router = require("express").Router();
const {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  uploadProfile
} = require("../controllers/userController");

const upload = require("../middleware/uploadMiddleware");

router.get("/", getUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.post("/upload-profile", upload.single("image"), uploadProfile);

module.exports = router;