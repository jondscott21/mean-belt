const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let PollSchema = new mongoose.Schema({
    question: {
        type: String,
        required: ['Please enter a question'],
        minlength: [8, 'Question must be at least 8 characters'],
    },
    option1: {
        type: String,
        required: ['Please enter an option'],
        minlength: [3, 'Option must be at least 3 characters'],
        // count: Number, default: 0
    },
    option2: {
        type: String,
        required: ['Please enter an option'],
        minlength: [3, 'Option must be at least 3 characters'],
    },
    option3: {
        type: String,
        required: ['Please enter an option'],
        minlength: [3, 'Option must be at least 3 characters'],
    },
    option4: {
        type: String,
        required: ['Please enter an option'],
        minlength: [3, 'Option must be at least 3 characters'],
    },
    creator: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    created_at:{
        type: Date, default: Date.now,
    },
    // options: [{type: mongoose.Schema.Types.ObjectId, ref: 'Option'}],
});
let Poll = mongoose.model('Poll', PollSchema);