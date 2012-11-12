(function( helper, to, from, msg, store, sh_store, cb ) {
  'use strict';
  var resp, phrases = [
      "(ﾉಥ益ಥ）ﾉ彡┻━┻",
      "┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻",
      "┻━┻ ︵ ¯\(ツ)/¯ ︵ ┻━┻",
      "(ノಠ益ಠ)ノ彡┻━┻",
      "(╯°□°）╯︵ ┻━┻"
  ];

  if ( msg.match( /^\@tableflip/ ) ) {
    resp = phrases[ helper.rand( phrases.length ) ];
  }

  cb.call( null, to, from, resp );
});
