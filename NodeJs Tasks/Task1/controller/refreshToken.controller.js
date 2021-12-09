const {
  setRefeshTokens,
  refreshTokens,
  generateAccessToken,
  generateRefreshToken,
} = require("../routes/verifyToken");
const jwt = require("jsonwebtoken");

exports.refresh = (req, res) => {
  const refreshToken = req.body.token;

  if (!refreshToken) return res.status(401).json("You are not authenticated");
  if (!refreshTokens.includes(refreshToken))
    return res.status(403).json("Refresh token is not valid!");

  jwt.verify(refreshToken, "myRefreshSecretKey", (err, user) => {
    err && console.log(err);
    let newTokens = refreshTokens.filter((token) => token !== refreshToken);
    setRefeshTokens(newTokens);

    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);

    refreshTokens.push(newRefreshToken);

    res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  });
};
