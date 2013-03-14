/*
    declares a winner from the choices presented.
*/

(function( helper, to, from, msg, store, sh_store, cb ) {
  'use strict';
  var resp = "";
    if ( msg.match( /^\@winner /i ) ) {
        var myargs = msg.split(" ");
        myargs.shift();

        var rand = myargs[Math.floor(Math.random() * myargs.length)];

        resp = "A winner is " + rand + "!";

        cb.call( null, to, from, resp );
    }

});
