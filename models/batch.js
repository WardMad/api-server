const mongoose = require('../config/database')
const { Schema } = mongoose



const studentSchema = new Schema({
  name: { type: String, required: true },
  photo: { type: String, required: true },
  color: { type: String, required: true }
})

const batchSchema = new Schema({
  number: { type: Number, required: true },
  title: { type: String, required: true },
  summary: { type: String, required: true },
  start: { type: Date},
  end: { type: Date },
  authorId: { type: Schema.Types.ObjectId, ref: 'users' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  students: { studentSchema}
})

module.exports = mongoose.model('batches', batchSchema)
