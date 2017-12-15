const router = require('express').Router()
const { Batch } = require('../models')
const { Student } = require("../models");
const passport = require('../config/auth')

router.get('/batches', (req, res, next) => {

const id = req.params.id
  Batch.findById(id)
      .then((batch) => {
        if (!batch) { return next() }
        res.json(batch.student)
      })
      .catch((error) => next(error))
  })

  .post('/batches/:id', (req, res, next) => {
    let newBatch = req.body
    // passport.authorize('jwt', { session: false }),
      // newStudent.authorId = req.account._id

      Batch.create(newBatch)
        .then((batch) => res.json(batch))
        .catch((error) => next(error))
    })


        // const newData = req.body
        //
        // student.update(newData)
        //   .then((updatedStudent) => {
        //     res.json(updatedStudent)
        //   })
        //   .catch((error) => next(error))



module.exports = router
