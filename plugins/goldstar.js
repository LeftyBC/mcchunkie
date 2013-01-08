/*

gold star module for mcchunkie

Gives someone a gold star.

author: Colin Moller <colin@lefty.tv>

*/

var colors = require('irc-colors');

(function( helper, to, from, msg, store, sh_store, cb ) {
	//'use strict';
	var resp, star = colors.yellow("★  ");

    var matches = msg.match(/^@goldstar (\w+)/);
    if (matches) {
        resp = "Good job, " + matches[1] + "! Here's a gold star for you: " + star;
        cb.call( null, to, from, resp );
    }
});

