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
        required: ['Please enter an option at least 3 characters long'],
        minlength: [3, 'Option must be at least 3 characters'],
        // count: Number, default: 0
    },
    option2: {
        type: String,
        required: ['Please enter an option at least 3 characters long'],
        minlength: [3, 'Option must be at least 3 characters'],
    },
    option3: {
        type: String,
        required: ['Please enter an option at least 3 characters long'],
        minlength: [3, 'Option must be at least 3 characters'],
    },
    option4: {
        type: String,
        required: ['Please enter an option at least 3 characters long'],
        minlength: [3, 'Option must be at least 3 characters'],
    },
    count1: {type: Number, default: 0},
    count2: {type: Number, default: 0},
    count3: {type: Number, default: 0},
    count4: {type: Number, default: 0},
    creator: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    created_at:{
        type: Date, default: Date.now,
    },
    // options: [{type: mongoose.Schema.Types.ObjectId, ref: 'Option'}],
});
let Poll = mongoose.model('Poll', PollSchema);