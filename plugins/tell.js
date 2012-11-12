/*
tell.js - queues messages up for people who aren't currently here

Currently only allows one message per target nick, subsequent messages will
overwrite previous ones. 

author: Colin Moller <colin@lefty.tv>

*/

(function( helper, to, from, msg, store, sh_store, cb ) {
  'use strict';
  var resp, matches;

  if ( typeof sh_store.tell_list != "object" ) {
   sh_store.tell_list = {};
    console.log('initializing the tell database');
  }

  if (msg.match(/^\@tell .*/)) {

    matches = msg.match(/^\@tell\s+(\w+)\s+(.*)/);

    var messageTo = '' + matches[1].toLowerCase(),
        messageKey = messageTo.toLowerCase(),
        storeMessage = '' + matches[2];

    sh_store.tell_list[messageKey] = { timestamp: new Date().getTime(), nick: from, message: storeMessage }
    resp = "I'll tell " + messageTo + " next time they speak, " + from + ".";
    saveStorage();

    cb.call( null, to, from, resp );

  } else {
    // this is a regular message, check if we have pending messages for this person
      var msgKey = from.toLowerCase();
      if (sh_store.tell_list[msgKey]) {
        // we have a pending message for this user

        var mData = sh_store.tell_list[msgKey];

        if (typeof mData == "object") {
            var decodedDate = new Date(mData.timestamp);
            resp = "Hey " + from + ", " + mData.nick + " left you a message at " + decodedDate + ", saying: " + mData.message;

            // now delete the message so it's not delivered again

            sh_store.tell_list[msgKey] = null;
            saveStorage();

            cb.call ( null, to, from, resp );
        }

      }
  }

});
