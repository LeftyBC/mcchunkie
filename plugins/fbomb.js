/*

author: Colin Moller <colin@lefty.tv>

*/
var fbomb_re = new RegExp();

(function( helper, to, from, msg, store, sh_store, cb ) {
	'use strict';
	var resp;

    if (!sh_store.bombcounter) {
        sh_store.bombcounter = {};
    }

    var wordlist = [ 'fuck', 'shit', 'ass', 'cunt' ];
    var words = "(" + wordlist.join('|') + ")";

    fbomb_re.compile(words,"gi");
    var result = fbomb_re.exec(msg);

    if (result) {
        var to_increment = result[0].toLowerCase();
        if (!sh_store.bombcounter[to_increment]) { sh_store.bombcounter[to_increment] = 0; }
        sh_store.bombcounter[to_increment]++;
        saveStorage();
        console.log(sh_store.bombcounter);
    } else {
        var matches = msg.match(/^\!(f|c|s|a)bomb/i);
        if (matches) {
            console.log(matches);
            var retrieve_var;
            switch(matches[1].toLowerCase())
            {
            case 'f':
              retrieve_var = "fuck";
              break;
            case 'c':
              retrieve_var = "cunt";
              break;
            case 's':
              retrieve_var = "shit";
              break;
            case 'a':
              retrieve_var = "ass";
              break;
            }

            if (sh_store.bombcounter[retrieve_var]) {
                var bombs = 0 + sh_store.bombcounter[retrieve_var], plural, plural2;
                if (bombs == 1) { 
                    plural = ""; plural2 = "has";
                } else {
                    plural = "s"; plural2 = "have";
                }
                resp = bombs.toString() + " " + matches[1].toLowerCase() + "bomb" + plural + " " + plural2 + " been dropped!";
                cb.call (null, to, from, resp);
            }
        }
    }

});

