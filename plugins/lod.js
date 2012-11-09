(function( helper, to, from, msg, store, sh_store, cb ) {
  'use strict';
  var resp, phrases = [
    "ಠ_ಠ"
  ];

  if ( msg.match( /^\@lod/ ) ) {
    resp = phrases[ helper.rand( phrases.length ) ];
  }

  cb.call( null, to, from, resp );
});
