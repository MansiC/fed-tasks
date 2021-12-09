const router = require("express").Router();
const jwt = require("jsonwebtoken");
// const {
//   setRefeshTokens,
//   refreshTokens,
//   generateAccessToken,
//   generateRefreshToken,
// } = require("./verifyToken");
const userController = require("../controller/user.controller");
const authorController = require("../controller/author.controller");
const refreshController = require("../controller/refreshToken.controller");

//refresh token
router.post("/refresh", refreshController.refresh);

//register user
router.post("/register", userController.register);

//Login user
router.post("/login", userController.login);

//register author
router.post("/author/register", authorController.register);

//Login author
router.post("/author/login", authorController.login);

module.exports = router;
