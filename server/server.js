//=====Imports=====//
const express  = require( 'express' );
const bp = require('body-parser');
const path = require( 'path' );
const port = process.env.PORT || 7777,
    app = express();

//=====Body-Parser=====//
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

//=====Path joins=====//
app.use( express.static( path.join( __dirname, 'client' )));
app.use( express.static( path.join( __dirname, 'bower_components' )));
require(path.join(__dirname, './server/config/mongoose.js'));
require(path.join(__dirname, "./server/config/routes.js"))(app);

//=====Server start=====//
app.listen( port, function() {
    console.log( `server running on port ${ port }` );
});