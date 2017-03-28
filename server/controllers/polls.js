const mongoose = require('mongoose');
let Poll = mongoose.model('Poll');
let User = mongoose.model('User');
module.exports = {
    index: function (req, res) {
        Poll.find({}).populate('creator').exec( function (err, polls) {
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
        Poll.create(req.body.newPoll, function (err, poll) {
                if (err) {
                    res.json(err);
                }
                else {
                    poll.creator.push(req.body.currentUser);
                    poll.save(function (err) {
                        if (err) {
                            res.json(err)
                        }
                        else {
                            res.json(poll);
                        }
                    });
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
                res.json(err);
            }
            else {
                res.json(poll);
            }
        });
    },
    vote: function (req, res) {
        let actualCount = 'count' + req.body.num;
        Poll.findOne({_id: req.body.option._id}, function (err, poll) {
            if (err) {
                res.json(err);
            }
            else {
                poll[actualCount] += 1;
                console.log(poll[actualCount]);
                    poll.save( function (err, updatedVote) {
                    if (err) {
                        res.json(err);
                    }
                    else {
                        res.json(updatedVote);
                    }
                });

            }
        });
    },
};

