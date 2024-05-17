const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI,{
     useNewUrlParser: true,
     useUnifiedTopology: true
   }).then(()=>{
     console.log('Connection to database successful');
}).catch((err)=>{
       console.error(err);
});



