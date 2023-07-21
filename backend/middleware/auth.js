// const jwt = require("jsonwebtoken");

// module.exports = (req, res, next) => {
//   try {
//     const token = req.headers.authorization.split(" ")[1];
//     const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
//     const userId = decodedToken.userId;
//     req.auth = {
//       userId: userId,
//     };
//     console.log("userId:", userId);
//     next();
//   } catch (error) {
//     res.status(401).json({ error });
//   }
// };
// TEST**************************
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    req.auth = {
      userId: decodedToken.userId,
    };
    console.log("userId:", decodedToken.userId);
    next();
  } catch (error) {
    res.status(401).json({ message: "Authentification échouée." });
  }
};
