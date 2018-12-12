const { mongoose, autoIncrement } = require('../mongo')

var snsSchema = mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    user: String,
    title : {
        type : String
    },

    comment_date: {type: Date, default: Date.now()},
    heart : {
        type : Number
    },
    likeuserId : {
        type : String
    }
});
// snsSchema.plugin(autoIncrement, {
//     model: 'image',
//     field: 'blogId',
//     startAt: 1
// })

module.exports = mongoose.model('sns', snsSchema);
