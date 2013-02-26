var twitter, twit, twitter_keys = {
  consumer_key: '2MXBOQCBAhG5oTgsOOI0BQ',
  consumer_secret: 'vylPPMjPajscnQGvaQ2kFCF0NnVyukh6lOhgDTZMlxE',
  access_token_key: '28613823-dJrNjsgBikcnH6l7egyNatrg0UTgaoKinuaLlaHk',
  access_token_secret: 'wA2K3AEhDknCCIShRpyGJjomOAjB5vAmV0DMOyuQ'
};


(function( helper, to, from, msg, store, sh_store, cb ) {
	'use strict';
   var resp, phrases = [], params = {
        screen_name: "DEVOPS_BORAT",
        include_rts: false,
        count: 200,
        trim_user: true,
        exclude_replies: true
    };

  if (msg.match(/^\@(devops|devops_borat|borat)/)) {

    // lazy eval of the twitter object, only when necessary
    if (!twitter) { twitter = require("ntwitter"); }
    if (!twit) { 
        twit = new twitter(twitter_keys);
        twit.verifyCredentials(function (err, data) {
               if (err) { console.log(err,data); }
        });
    }

    twit.getUserTimeline(params, function(err,data) {
        data.forEach(function(key,innerdata) {
            phrases.push(key.text);
        });

        resp = "@DEVOPS_BORAT say: " + phrases[ Math.floor( Math.random() * phrases.length ) ];
        cb.call( null, to, from, resp );
    });
  }

});
