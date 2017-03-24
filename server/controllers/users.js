const mongoose = require('mongoose');
let User = mongoose.model('User');
module.exports = {
    index: function (req, res) {
        User.find({}, function (err, users) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(users);
            }
        });
    },
    create: function (req, res) {
        User.create(req.body, function (err, user) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(user);
            }
        });
    },
};