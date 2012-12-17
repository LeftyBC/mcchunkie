(function( helper, to, from, msg, store, sh_store, cb ) {
	'use strict';
  var resp, phrases = [
    "Nice try, asshole."
  ];

  if (msg.match(/^\@leftyfacts/i)) {
    resp = phrases[ Math.floor( Math.random() * phrases.length ) ];
  }

  cb.call( null, to, from, resp );
});
