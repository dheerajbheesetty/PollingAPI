const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://dheerajsai549:EtrzuzKWxt35l94p@cluster0.kgruxzb.mongodb.net/');

// Code for using the cloud mongodb atlas 
//const connectParams = {
//    useNewUrlParser: true,
//    useUnifiedTopology: true
//}

// Code for manually using the mongodb of local system
const db = mongoose.connection;

//If any Error then Getting this Line
db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', () => {
    console.log("Connected to Database :: MongoDB ")
});


module.exports = mongoose;