const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: ['Please enter a name'],
    },
    _poll: {type: mongoose.Schema.Types.ObjectId, ref: 'Poll'},
});
let User = mongoose.model('User', UserSchema);