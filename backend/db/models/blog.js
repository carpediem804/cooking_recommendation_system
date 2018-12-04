const { mongoose, autoIncrement } = require('../mongo')

const blogSchema = new mongoose.Schema({
    userId: {
        type: Number,
        //unique: true
    },
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
    /* ... */
})

 //doctorId를 Auto Increment 필드로 지정
  blogSchema.plugin(autoIncrement, {
      model: 'blog',
      field: 'userId',
      startAt: 1
  })

module.exports = mongoose.model('blog', blogSchema)
