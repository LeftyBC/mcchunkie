(function( helper, to, from, msg, store, sh_store, cb ) {
	'use strict';

  if (msg.match(/^\@reload$/)) {
      console.log('reloading plugins, requested by ', from);
      loadPlugins( plugins, true );
      loadPlugins( messages, false );
  }

});
