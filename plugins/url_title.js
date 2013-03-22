var S = require('string');

(function( helper, to, from, msg, store, sh_store, cb ) {
  var resp;
    if ( msg.indexOf( 'http://' ) > -1 || msg.indexOf( 'https://' ) > -1 ) {

        var matches = msg.match(/(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/i);
        var url = matches[0];

        if (url) {
            helper.httpGet(url,function(err,data) {
                var sData = data.toString();
                var titleMatch = sData.match(/<title>([^<]+)<\/title>/i);
                var title;
                if (titleMatch && titleMatch[1]) {
                    title = S(titleMatch[1].toString().trim()).decodeHTMLEntities().s;
                } else {
                    title = "(no title)";
                }

                if (title) {
                    resp = "title: " + title;
                    cb.call(null,to,from,resp);
                }
            });
        }
   }
});
