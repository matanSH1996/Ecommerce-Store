const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.authToken = (req, res, next) => {
  let token = req.header("token");
  if (!token) {
    return res
      .status(401)
      .json({ msg: "you must send token in this url to get data" });
  }
  try {
    let decodeToken = jwt.verify(token, process.env.JWT_SECRET);
    req.userData = decodeToken;
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ msg: "token invalid or expired" });
  }
};

exports.authAdminToken = async (req, res, next) => {
  try {
    let user = await User.findOne({ _id: req.userData._id });
    if (user.role != "admin") {
      return res
        .status(401)
        .json({ msg: "You must be admin user to send here data" });
    }
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ msg: "err in admin" });
  }
};
