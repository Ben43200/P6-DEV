// const express = require('express');
// const helmet = require('helmet');
// const mongoose = require('mongoose');
// const userRoutes = require('./routes/userRoute');

// mongoose.connect('mongodb+srv://projet6:gnwJQvj5w1rkTQyc@cluster0.uz4fu.mongodb.net/exercices?retryWrites=true&w=majority',
//   {  useNewUrlParser: true,
//     useUnifiedTopology: true })
//   .then(() => console.log('Connexion à MongoDB réussie !'))
//   .catch(() => console.log('Connexion à MongoDB échouée !'));
  
// const app = express();

// if (process.env.MODE === "DEV") {
//     app.use((req, res, next) => {
//         res.setHeader('Access-Control-Allow-Origin', '*');
//         res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
//         res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//         next();
//       });
      
// }
// else {
//     app.use(helmet());
// }

// app.use(express.json());

// // app.use('/api/stuff', stuffRoutes);
// app.use('/auth', userRoutes);


// module.exports = app;




///////////**********/////// */
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
// const User = require('./models/User')
// const sauce = require('./models/ModelsSauce')
// const User = require('./models/User');
// const router = require('./routes/userRoute');
// const userRoutes = require('./routes/userRoute');

mongoose.connect('mongodb+srv://projet6:gnwJQvj5w1rkTQyc@cluster0.uz4fu.mongodb.net/exercices?retryWrites=true&w=majority',
  {  useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  



// app.use((req, res, next) => {
//   res.status(201);
//   next();
// });

app.use((req, res, next) => {
res.json({ message: 'test ok'})

  next();
});





























module.exports = app;

