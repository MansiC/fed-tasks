const User = require("../models/User");
const CryptoJS = require("crypto-js");
const {
  generateAccessToken,
  generateRefreshToken,
  refreshTokens,
} = require("../routes/verifyToken");
const { registerSchema, loginSchema } = require("../validation");

exports.register = async (req, res) => {
  try {
    const result = await registerSchema.validateAsync(req.body);

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString(),
    });
    const savedUser = await newUser.save();

    console.log("\n Controller");
    res.status(200).json(savedUser);
  } catch (err) {
    if (err.isJoi === true) res.status(422).json(err);
    else res.status(500).json(err);
  }
};

//Login user
exports.login = async (req, res) => {
  try {
    const result = await loginSchema.validateAsync(req.body);

    const user = await User.findOne({ name: req.body.name });
    !user && res.status(401).json("Wrong Credentials name!");
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    originalPassword != req.body.password &&
      res.status(401).json("Wrong Credentials!");

    const accessToken = generateAccessToken(user);

    const refreshToken = generateRefreshToken(user);
    refreshTokens.push(refreshToken);

    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, accessToken, refreshToken });
  } catch (err) {
    if (err.isJoi === true) res.status(422).json(err.details[0].message);
    else res.status(500).json(err);
  }
};
