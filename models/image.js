'use strict';

const mongoose = require('mongoose');

let imageSchema = new mongoose.Schema ({
  url: {type: mongoose.SchemaType.Url},
  createdAt: {type: Date, default: Date.now}
});



let Image = mongoose.model('Image', imageSchema);

module.exports = Album;
