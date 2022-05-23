// // in controllers/stuff.js

// const Sauce = require('../models/ModelsSauce');

// exports.createSauce = (req, res, next) => {
//   const sauce = new Sauce({
//     userId: req.body.userId,
//     name: req.body.name,
//     manufacturer: req.body.manufacturer,
//     description: req.body.description,
//     title: req.body.title,
//     mainPepper: req.body.mainPepper,
//     imageUrl: req.body.imageUrl,
//     heat: req.body.heat,
//     likes: req.body.likes,
//     dislikes: req.body.dislikes,
//     usersLiked: req.body.usersLiked,
//     usersDisliked: req.body.usersDisliked,
//   });
//   sauce.save().then(
//     () => {
//       res.status(201).json({
//         message: 'Post saved successfully!'
//       });
//     }
//   ).catch(
//     (error) => {
//       res.status(400).json({
//         error: error
//       });
//     }
//   );
// };





// exports.getOneSauce = (req, res, next) => {
//     Sauce.findOne({
//       _id: req.params.id
//     }).then(
//       (thing) => {
//         res.status(200).json(thing);
//       }
//     ).catch(
//       (error) => {
//         res.status(404).json({
//           error: error
//         });
//       }
//     );
//   };
  
//   exports.modifySauce = (req, res, next) => {
//     const sauce = new Sauce({
//         userId: req.body.userId,
//         name: req.body.name,
//         manufacturer: req.body.manufacturer,
//         description: req.body.description,
//         title: req.body.title,
//         mainPepper: req.body.mainPepper,
//         imageUrl: req.body.imageUrl,
//         heat: req.body.heat,
//         likes: req.body.likes,
//         dislikes: req.body.dislikes,
//         usersLiked: req.body.usersLiked,
//         usersDisliked: req.body.usersDisliked,
//     });
//     sauce.updateOne({_id: req.params.id}, sauce).then(
//       () => {
//         res.status(201).json({
//           message: 'Thing updated successfully!'
//         });
//       }
//     ).catch(
//       (error) => {
//         res.status(400).json({
//           error: error
//         });
//       }
//     );
//   };
  
//   exports.deleteSauce = (req, res, next) => {
//     Sauce.deleteOne({_id: req.params.id}).then(
//       () => {
//         res.status(200).json({
//           message: 'Deleted!'
//         });
//       }
//     ).catch(
//       (error) => {
//         res.status(400).json({
//           error: error
//         });
//       }
//     );
//   };
  
//   exports.getAllSauce = (req, res, next) => {
//     Sauce.find().then(
//       (things) => {
//         res.status(200).json(things);
//       }
//     ).catch(
//       (error) => {
//         res.status(400).json({
//           error: error
//         });
//       }
//     );
//   };