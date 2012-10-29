(function( helper, to, from, msg, store, sh_store, cb ) {
  'use strict';
  var resp, phrases = [
    "Sounds like someone wants to get... funky.",
    "You punched me in the boob! Prepare to die, obviously!",
    "Yeah, I think garlic bread would have to be my favourite all-time food. I could eat it for every meal. Or just constantly, without stopping.",
    "That's it! You cocky cock! You'll pay for your crimes against humanity!",
    "You once were a ve-gone, but now you will begone.",
    "You will pay for your insolence!",
    "We are Sex Bob-Omb and we are here to make you think about death and get sad and stuff!",
    "OK, this next song goes out to the guy who keeps yelling from the balcony. It's called \"We Hate You, Please Die.\"",
    "The only thing separating me from her is the two minutes it's gonna take to kick your ass.",
    "If I peed my pants would you pretend that I just got wet from the rain?",
    "Well, if my cathedral of cutting-edge taste holds no interest for your tragically Canadian sensibilities, then I shall be forced to grant you a swift exit from the premises... and a fast entrance into hell!",
    "I have to go pee due to boredom.",
    "Your BF's about to get eff'd in the B!",
    "Look, I didn't write the gay handbook. If you got a problem with it, take it up with Liberace's ghost.",
    "I don't think I can hit a girl. They're soft.",
    "Prepare to feel the wrath of the League of the Evil Exes.",
    "I'm in lesbians with you.",
    "We have blueberry, raspberry, ginseng, sleepy time, green tea, green tea with lemon, green tea with lemon and honey, liver disaster, ginger with honey, ginger without honey, vanilla almond, white truffel, blueberry chamomile, vanilla walnut, constant comment and... earl grey.",
    "Oh I'd love to postpone, but I just cashed in my last rain check.",
    "When I'm around you, I kind of feel like I'm on drugs. Not that I do drugs. Unless you do drugs, in which case I do them all the time. All of them.",
    "Can we skip the dream time? Color me not interested.",
    "Todd Ingram, you're under arrest for Veganity Violation Code Number 827: imbibing of half-and-half.",
    "I'll leave you alone forever now."
  ];

  if ( msg.match( /^\@scott/ ) ) {
    resp = phrases[ helper.rand( phrases.length ) ];
  }

  cb.call( null, to, from, resp );
});
