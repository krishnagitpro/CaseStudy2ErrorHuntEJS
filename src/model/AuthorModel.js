const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/Library');
mongoose.connect('mongodb+srv://anand:Anand@123@ictakfiles.x8z14.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;