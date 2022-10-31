const router = require("express").Router();
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const userController = require("../controllers/userController");
const User = require("../models/user");
const { authToken } = require("../middlewares/auth");

const genToken = (_id) => {
  let token = jwt.sign({ _id }, process.env.JWT_SECRET, {
    expiresIn: "120mins",
  });
  return token;
};

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser)
  .put()
  .delete();

router
  .route("/:id")
  .get(userController.getOneUser)
  .post()
  .put(userController.updateUser)
  .delete(userController.deleteUser);

router.post("/register", async (req, res) => {
  try {
    let user = new User(req.body);
    let salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    res.status(201).json(_.pick(user, ["_id"]));
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    console.log(111, req.body);
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ msg: "לא נמצא משתמש" });
    }
    let validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) {
      return res.status(400).json({ msg: "סיסמה שגויה, נסו שוב " });
    }
    let myToken = genToken(user._id);
    console.log({ token: myToken });
    res.json({ token: myToken });
  } catch (err) {
    res.status(400).json(err);
  }
});

//return the user's details
router.post("/myinfo", authToken, async (req, res) => {
  try {
    const user = await User.findOne(
      { _id: req?.userData?._id },
      { password: 0 }
    );
    console.log(user);
    res.json(user);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
