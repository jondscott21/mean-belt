const mongoose = require('mongoose');
let Poll = mongoose.model('Poll');
let Option = mongoose.model('Option');
module.exports = {
    index: function (req, res) {
        Poll.find({}, function (err, polls) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(polls);
            }
        });
    },
    create: function (req, res) {
        console.log(req.body);
        Poll.create(req.body, function (err, poll) {
                if (err) {
                    res.json(err);
                }
                else {
                    res.json(poll);
                }
        });
    },
    delete: function (req, res) {
        Poll.remove({_id:req.params.id}, function (err) {
            if (err) {
                res.json(err);
            }
            else {
                res.json({message:'Deleted Survey'});
            }
        });
    },
    show: function(req, res) {
        Poll.findOne({_id: req.params.id}, function (err, poll) {
            if (err) {
                console.log(err);
            }
            else {
                res.json(poll);
            }
        });
    },
};