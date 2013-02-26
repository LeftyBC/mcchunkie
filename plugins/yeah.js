(function( helper, to, from, msg, store, sh_store, cb ) {
  'use strict';
  var resp = "";
  if ( helper.isRelevant( msg ) ) {
    if ( msg.match( /CSI/i ) ) {
      resp += "( •_•)\n"
      resp += "( •_•)>⌐■-■\n"
      resp += "(⌐■_■)"

      setTimeout( function() {
        resp = 'YEEEAAAAAAHHHHHH!';
        cb.call( null, to, from, resp );
      }, 8000 );
    }
  }
  cb.call( null, to, from, resp );
});
