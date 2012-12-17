(function( helper, to, from, msg, store, sh_store, cb ) {
	'use strict';
  var resp, phrases = [
    "Birkhoff once punched the ground in fury.  The resulting bulge on the other side of the planet is known today as Mount Everest.",
    "Birkhoff can collate one hundred and seventy tax returns per second.",
    "When birkhoff was born, a secret cartel of ninjas killed the entire staff of the hospital he was born in, and he was whisked away to the Arctic to be raised by wolves.  This is why he prefers his steak as raw as he can get it.",
    "Don't ever say birkhoff's name three times fast.",
    "Why did the chicken cross the road? Because birkhoff fucking told it to.",
    "Birkhoff once pounded his head on a keyboard in frustration.  Not only did it break the keyboard, the desk, and crack the floor underneath, but a new Photoshop plugin to make people's eyes bleed was mysteriously created on his workstation.",
    "Birkhoff once beat up Zalgo.",
    "When you see birkhoff, you'll shit bricks.",
    "Kids go cuckoo for Cocoa-puffs.  Kids explode for Birkhoff-puffs.",
    "They say no human can sneeze with their eyes open.  Birkhoff can, and also shoot acid from his tear ducts.",
    "Birkhoff is the chemical that the Chemical Brothers are named after.",
    "All love songs sung by female vocalists are about birkhoff, secretly.",
    "The Ellingson Mineral Corporation replaced their aging Gibson supercomputer complex with a system designed, built, and sold entirely by birkhoff.",
    "Birkhoff wears an adamantium scarf."
  ];

  if (msg.match(/^\@birkhoff/)) {
    resp = phrases[ Math.floor( Math.random() * phrases.length ) ];
  }

  cb.call( null, to, from, resp );
});
