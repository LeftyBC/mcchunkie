(function( helper, to, from, msg, store, sh_store, cb ) {
  'use strict';
  var resp;

  if ( msg.match( /cheese burger/i ) || msg.match( /cheeseburger/i ) ) {
    resp = "Dayum DAYum DAAAAAYUUUUUMMMMM!!!!";
  }
  if ( msg.match( /5 guys/i ) ) {
    resp = "Dayum DAYum DAAAAAYUUUUUMMMMM!!!!";
  }

  cb.call( null, to, from, resp );
});
