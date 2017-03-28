let path = require('path');
let users = require('./../controllers/users.js');
let polls = require('./../controllers/polls.js');
// let orders = require('./../controllers/orders.js');

module.exports = function(app){
    app.get('/survey/1', users.index);
    app.get('/survey/2', polls.index);

    app.post('/survey/1', users.create);
    app.post('/survey/2', polls.create);
    // app.post('/survey/3', orders.create);

    // app.put('/friends/:id', friends.update);

    app.delete('/survey/:id', polls.delete);

    app.get('/survey/:id', polls.show);
    app.post('/survey/vote', polls.vote);
};
