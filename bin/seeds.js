const mongoose = require('mongoose');


mongoose
  .connect('mongodb://localhost/passport-website', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  })

  const User = mongoose.model('User', {
    username: String,
    password: String,
    isAdmin: Boolean,
    
  });


  User.create({
    username: "Heron", 
    password: "KingCole", 
    isAdmin: true, 
     });