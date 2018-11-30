const { mongoose, autoIncrement } = require('../mongo')

const cookSchema = new mongoose.Schema({
    recipeId: {
        type: Number,
        unique: true
    },
    name:{
        type:String
    },
    gradients:{
        type:String
    },
    url:{
        type:String
    }
    /* ... */
})

// doctorId를 Auto Increment 필드로 지정
cookSchema.plugin(autoIncrement, {
    model: 'cook',
    field: 'recipeId',
    startAt: 0
})

module.exports = mongoose.model('cook', cookSchema)