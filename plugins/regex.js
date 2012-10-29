/*

regex module for mcchunkie

performs simple regexes on the last line in the channel
does not yet support chaining regexes like lazylopez does

author: Colin Moller <colin@lefty.tv>

*/
(function( helper, to, from, msg, store, sh_store, cb ) {
	'use strict';
	var resp;

    if (!sh_store.lastmessage) {
        sh_store.lastmessage = '';
    }

    if (msg.match(/^s\//)) {
        var matches = msg.split('/');

        if (sh_store.lastmessage.length < 1) { return; }

        var find = matches[1],
            repl = matches[2],
            finalmsg, replmsg;

        from = from || to;

        // slice off the extra / if it's present
        if (repl.lastIndexOf('/') == repl.length) {
            repl = repl.slice(-1);
        }

        replmsg = 's/'+find+'/'+repl+'/';

        var re = new RegExp(find,"g");
        finalmsg = sh_store.lastmessage.replace(re, repl);

        resp = finalmsg + '';

    } else {
        sh_store.lastmessage = msg;
    }

    cb.call( null, to, from, resp );
});

