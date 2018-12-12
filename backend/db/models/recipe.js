const { mongoose } = require('../mongo')

const recipeSchma = new mongoose.Schema({
    recipeId: {
        type: Number,
        unique: true
    },
    title:{
        type:String
    },
    recipe:{
        type:String
    },

})


module.exports = mongoose.model('recipe', recipeSchma)
