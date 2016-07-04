'use strict';

const mongoose = require('mongoose');
require('mongoose-type-url');

let albumSchema = new mongoose.Schema ({
  name: {type: String},
  images: [{type:mongoose.SchemaTypes.Url, ref: 'Image'}]

});



let Album = mongoose.model('Album', albumSchema);

module.exports = Album;
