'use strict';

const express = require('express');
const Album = require('../models/album')

let router = express.Router();



router.route('/')
  .get((req, res) =>{
    Album.find({})
    .exec((err, albums) => {
      res.status(err ? 400 : 200).send(err || albums);
    })
  })
  .post((req, res) => {
    Album.create(req.body, (err, albums) => {
      res.status(err ? 400 : 200).send(err || albums);
    })
  })

  router.route('/:id')
  .get((req, res) => {
      Album.findById(req.params.id, (err, album) => {
        res.status(err ? 400 : 200).send(err || album);
      })
    })
    .put((req, res)=> {
      Album.findByIdAndUpdate(req.params.id, req.body,  (err, album) => {
        res.status(err ? 400 : 200).send(err || album);
      })
    })
    .delete((req, res) => {
      Album.findByIdAndRemove(req.params.id, err => {
        res.status(err ? 400 : 200).send(err);
      })
    })










module.exports = router;
