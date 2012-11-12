(function( helper, to, from, msg, store, sh_store, cb ) {
  'use strict';
  var resp, phrases = [
      " ┬──┬ ¯\_(ツ)"
  ];

  if ( msg.match( /^\@tableunflip/ ) || msg.match ( /^\@unflip/ ) ) {
    resp = phrases[ helper.rand( phrases.length ) ];
  }

  cb.call( null, to, from, resp );
});
