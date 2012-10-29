(function( helper, to, from, msg, store, sh_store, cb ) {
  'use strict';
  var resp, data, matches,
    find_target,
    now = new Date().getTime();

  if ( ! sh_store.seen_nicks ) {
    sh_store.seen_nicks = [];
    console.log('initializing the seen-nicks database');
  }

  if (msg.match(/^@seen .*/)) {
    //someone's asking for the last time a nick was seen

    matches = msg.match(/^\@seen\s+(.*)/);

    find_target = ('' + matches[1]);

    if (sh_store.seen_nicks[find_target.toLowerCase()] != null) {

        data = sh_store.seen_nicks[find_target.toLowerCase()];

        var when = data.date || 'never', what = data.message || 'nothing',
            who = data.nick || 'nobody', decoded_when = new Date(when);

        resp = who + ' was last seen at [' + decoded_when + '] saying: ' + what;
    } else {
        resp = "I haven't seen '" + find_target + "', " + from;
    }

    cb.call( null, to, from, resp );


  } else {
    // this is a regular message, just log the nick
    sh_store.seen_nicks[from.toLowerCase()] = { nick: from, date: now, message: msg };
  }

});
