var myClient = redis.createClient();

(function( helper, to, from, msg, store, sh_store, cb ) {
  'use strict';
  var resp = '',key,to_add = '';

    var match = msg.match( /^\!(\w+)/);
    if (match) {
        // this is a dict request - check if it's an add

        var match2 = msg.match( /^\!(\w+) add (.*)$/);
        if (match2) {
            // this is an add request
            var key = match2[1], to_add = match2[2];
            console.log("Adding ",key,":",to_add);
            var keyname = 'stored_'+key;
            myClient.sadd(keyname,to_add,function(a,b) {
                resp = "Added '"+to_add+"' to !"+key;
                cb.call( null, to, from, resp );

            });

        } else {
            // this is just a lookup
            var key = match[1], phrases;
            var keyname = 'stored_'+key;
            myClient.srandmember(keyname,function(err,val) {
                if (err != null) console.log(err,val);
                resp = val;
                cb.call( null, to, from, resp );
            });
        }
    }

});
