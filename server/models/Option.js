const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let OptionSchema = new mongoose.Schema({
    option1: {
        type: String,
            required: ['Please enter an option'],
            minlength: ['Option must be at least 3 characters'],
        },
    option2: {
        type: String,
            required: ['Please enter an option'],
            minlength: ['Option must be at least 3 characters'],
        },
    option3: {
        type: String,
        required: ['Please enter an option'],
        minlength: ['Option must be at least 3 characters'],
    },
    option4: {
        type: String,
        required: ['Please enter an option'],
        minlength: ['Option must be at least 3 characters'],
    },

});
let Option = mongoose.model('Option', OptionSchema);