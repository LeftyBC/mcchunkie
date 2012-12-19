(function( helper, to, from, msg, store, sh_store, cb ) {
	'use strict';
  var resp, phrases = [
    "HE̸͡ ̨͠͝C͟O͏̕͏M҉̨E͞S͘͟",
    "When it begins, you will hear the sound of children screaming - as though from a great distance.\nA smoking orb of nothing will grow above your bed, and from it will emerge a thousand starving crows.  As I slip through the widening maw in my new form, you will catch only a glimpse of my radiance before you are incinerated.\nThen, as tears of bubbling pitch stream down my face, my dark work will begin.  I will open one of my six mouths, and I will sing the song that ends the Earth.",
    "He who͞ ̴̢̀͝W͝a̷̧͘͞i̡҉t̷̴̢̀̕s͏̀ ̶̨͟͏B̴̶͜è̕҉̧̕h̕͢i̵ń͝d̵͡҉ ̴̡̡̨͞T̶̡̧͝ḩ͠ȩ͞ ̶̛͢͞W̴̢̕͏̀a̵̢̡͢͠l̨͢҉̨̀l̡̀͘.̵",
    "H̷̛́E̛ C͘O̕M̷E̡Ş̶,̸̕͞ ̷̧͝ T̷̶̰̺̭͘Ḩ̯̥̼̹͓̥̘̰͡E̩̜̟̗͜ ̟͇̮̬̻̖̰̕ͅZ̴̺̰͓̭̲̰̘̕A̷̳͖L͉̠̭͍̹̪̞̻͍͞͠͝G̸̡̘̹̝͟Ó̗̪͖̖̯͢ ҉̣̰͖̫͕Ḩ͓̞̫̦͟E͍̘͎̻̟͙ ͕̦C҉̮̱̪͇̳͉͘O҉̶͙̭͙͎M̶̸͕̖̺͙̘E̵̱͈͚̺S̵̸͕",
    "T̶̕͟H́͝E̶̷͞͞ ̡́͠͝H̀͏͠͝O͏̧̢́͜Ŕ͟Ŕ̵̛Ó̵̀͘R̸̡̨̀̕",
  ];

  if (msg.match(/zalgo/i)) {
    resp = phrases[ Math.floor( Math.random() * phrases.length ) ];
  }

  cb.call( null, to, from, resp );
});
