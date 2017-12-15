const mongoose = require('../config/database')
const { Schema } = mongoose



const studentSchema = new Schema({
  name: { type: String, required: true },
  photo: { type: String, required: true },
  color: { type: String, required: true }
})


module.exports = mongoose.model('student', studentSchema)
