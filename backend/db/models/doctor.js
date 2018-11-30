const { mongoose, autoIncrement } = require('../mongo')

const doctorSchema = new mongoose.Schema({
    doctorId: {
        type: Number,
        unique: true
    },
    /* ... */
})

// doctorId를 Auto Increment 필드로 지정
doctorSchema.plugin(autoIncrement, {
    model: 'Doctor',
    field: 'doctorId',
    startAt: 1
})

module.exports = mongoose.model('Doctor', doctorSchema)
