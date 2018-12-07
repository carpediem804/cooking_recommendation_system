var mongoose = require('mongoose');

var imagesSchema = mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    user: String,
    title : {
        type : String
    },
    body : {
        type : String
    },
    category : {
        type : String
    },
    blogId : {
        type : Number
    }
});

module.exports = mongoose.model('Image', imagesSchema);
