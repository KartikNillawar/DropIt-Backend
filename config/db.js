require('dotenv').config();
const mongoose = require('mongoose');
function connectDB() {
    // Database connection 
    /*
    mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log('Database connected 🥳🥳🥳🥳');
    }).catch(err => {
        console.log('Connection failed ☹️☹️☹️☹️');
    });*/
    mongoose.connect(
        process.env.MONGO_CONNECTION_URL,
        {
          //useFindAndModify: false,
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
        (err) => {
          if (err)
          {
            console.log(err);
            throw err;
          } 
          console.log("Connected to MongoDB!!!");
        }
      );
}


// mIAY0a6u1ByJsWWZ

module.exports = connectDB;