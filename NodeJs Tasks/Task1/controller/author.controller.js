const Author = require("../models/Author");
const CryptoJS = require("crypto-js");
const {
  generateAccessToken,
  generateRefreshToken,
  refreshTokens,
} = require("../routes/verifyToken");
const { registerAuthorSchema, loginAuthorSchema } = require("../validation");

//register author
exports.register = async (req, res) => {
  try {
    const result = await registerAuthorSchema.validateAsync(req.body);

    const newAuthor = new Author({
      name: result.name,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString(),
      books: result.books,
      image_url: result.image_url,
      description: result.description,
    });
    const savedAuthor = await newAuthor.save();
    res.status(200).json(savedAuthor);
  } catch (err) {
    if (err.isJoi === true) res.status(422).json(err);
    else res.status(500).json(err);
  }
};

//Login author
exports.login = async (req, res) => {
  try {
    const result = await loginAuthorSchema.validateAsync(req.body);

    console.log("result", result);
    const author = await Author.findOne({ name: result.name });
    !author && res.status(401).json("Wrong Credentials!");
    const hashedPassword = CryptoJS.AES.decrypt(
      author.password,
      process.env.PASS_SEC
    );
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    originalPassword != result.password &&
      res.status(401).json("Wrong Credentialsl");

    const accessToken = generateAccessToken(author);

    const refreshToken = generateRefreshToken(author);
    refreshTokens.push(refreshToken);

    const { password, ...others } = author._doc;

    res.status(200).json({ ...others, accessToken, refreshToken });
  } catch (err) {
    if (err.isJoi === true) res.status(422).json(err.details[0].message);
    else res.status(500).json(err);
  }
};
