const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
    } 
    req.authentifiedUserId = userId;
    next();
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};

// module.exports = (req, res, next) => {
//   try {
//     const token = req.headers.authorization.split(' ')[1];
//     console.log(token);
//     const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
//     const userId = decodedToken.userId;
//     console.log(userId);
//     // req.auth = { userId };
//     if (req.body.userId && req.body.userId !== userId) {
//       throw('Invalid user ID');
//     }else{
    
//     next();
//   } 
//   catch {
//     res.status(401).json({
//       error: new Error ('Requête non authentifiée !')
//     });
//   }
// };


// module.exports = (req, res, next) => {
//   try {
//     const token = req.headers.authorization.split(' ')[1];
//     const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
//     const userId = decodedToken.userId;
//     req.auth = { userId };
//     if (req.body.userId && req.body.userId !== userId) {
//       throw 'User ID non valide !';
//     } else {
//       next();
//     }
//   } catch {
//     res.status(401).json({
//       error: new Error ('Requête non authentifiée !')
//     });
//   }
// };


// module.exports = function (req, res, next) {
//   User.findById(req.session.userId)
//     .exec(function (error, user) {
//       if (error) {
//         return next(error);
//       } else {
//         if (user === null) {
//           const err = new Error("Not authorized! Go back!");
//           err.status = 400;
//           return next(err); // This will be caught by error handler
//         } else {
//           return next(); // No error proceed to next middleware
//         }
//       }
//     });
// };