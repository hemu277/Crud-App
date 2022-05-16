const mongoose = require("mongoose");


const Db = "mongodb+srv://hemu:hemangi27@devconnector.ce0ka.mongodb.net/mern?retryWrites=true&w=majority"


mongoose.connect(Db,
        {
      useNewUrlParser: true,
     useUnifiedTopology: true
    }).then(() => console.log("connection start")).catch((error)=> console.log(error.message)
  );