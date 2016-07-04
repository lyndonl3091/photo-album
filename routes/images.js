'use strict';
const express = require('express');
const Album = require('../models/album')

let router = express.Router();


router.route('/')
  .get((req, res) =>{
    Image.find({})
    .exec((err, images) => {
      res.status(err ? 400 : 200).send(err || images);
    })
  })
  .post((req, res) => {
    Image.create(req.body, (err, images) => {
      res.status(err ? 400 : 200).send(err || images);
    })
  })

  router.route('/:id')
  .get((req, res) => {
      Image.findById(req.params.id, (err, image) => {
        res.status(err ? 400 : 200).send(err || image);
      })
    })
    .delete((req, res) => {
      Image.findByIdAndRemove(req.params.id, err => {
        res.status(err ? 400 : 200).send(err);
      })
    })


module.exports = router;
