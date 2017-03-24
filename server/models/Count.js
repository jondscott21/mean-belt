const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let CountSchema = new mongoose.Schema({

});
let Count = mongoose.model('Count', CountSchema);