
var murdered_family_game = {
"prompts":[
    {
    "name": "main_prompt",
    "promptContent":'<p>You wake up on a Sunday at like one o\'clock in the morning. Immediately, you vomit and scream at the top of your lungs, the more you vomit the more afraid of vomit you become and the louder you scream, the louder you scream the more allergic you become to noise and the more you vomit.</p> <p>Seventy eight days later you realize you\'re being stupid and stop. In that time somebody stapled a note written in blood on your chest. </p>', 
    "promptImage": "/assets/bedroom.png", 
    "promptChoices":["read the note", "go watch project runway, and play with your belly button", "have a baby"] 

    },
    {
     "name": "baby_prompt",
     "promptContent":'<p>You squeeze a baby out of your being. After thorough analysis you come to the conclusion that  it\'s a girl. Hating to enforce labels, you tell the baby to name itself. It blows a booger bubble out    of its nose, which makes you laugh merrily and say.. </p>',
     "promptImage": "/assets/have_a_baby.png",
     "promptChoices": ["Jason it is!", "That's not an answer you idiot! What's your name?", "Hey, I wish we could talk some more but I've got this note stapled to my chest that I should read."]
    }, 

    {
        "name":"jason_prompt",
        "promptContent": "<p>Baby Jason starts to glow like a little baby lightbulb. She giggles and burps and is altogether a tubby sign that seems to be beckoning you to get out of this crazy life. To throw it all   away and start all over. Maybe at a small mining town, or a place where they don\'t know about   city things like bathing and Netflix.</p> <p>He begs you not to read the note on your chest and to just escape from the rat race.</p>",
        "promptImage":"/assets/have_a_baby.png",
        "promptChoices": ["No, I can't Baby Jason. I have a life here, a good life, with friends and family. It wouldn't be right.", "Sign me up!", "I promised myself a long time ago that I'd stop letting babies tell me what to do a long time ago. I'm going to read the note"]
    },

    {
        "name": "whats_your_name_prompt",
        "promptContent": "The baby, in baby like fashion, blows more booger bubbles.",
        "promptImage": "/assets/have_a_baby.png",
        "promptChoices": ["Jason it is!", "Blow your own bubbles in sad defiance", "What's that girl? You want me to read the note?"]
    },

    {
        "name": "read_the_note_prompt",
        "promptContent": '<p>The blood note says “Hey man, while you were screaming and vomiting I murdered your entire family. My bad. I think I wasn\'t raised good or something. Signed, Jake O\'Malley". </p> <p>You crumple the note in your hand, swallow it whole, and ask yourself who could have done this? Before you can piece it all together your doorbell rings.</p>',
        "promptImage":"/assets/blood_letter.png",
        "promptChoices":["answer your door", "think about whether or not paper has gluten in it"]
    },

    {"name": "blow_bubbles_prompt",
    "promptContent": '<p>You blow bigger bubbles than the baby proving once and for all that you are a pretty petty person.</p>',
    "promptImage": "/assets/bubble.png",
    "promptChoices": ["That is an accurate description of my personality yeah[end game]"]
    },

//----this has the potential to be where i fucked everything up ---//
    {"name": "no_baby_jason_prompt",
     "promptContent": "<p>Baby Jason respects your decision. It is, after all, yours to make. She gets her little baby bindle   and walks off into the woods.</p>",
     "promptImage": "/assets/bindle_baby.png",
     "promptChoices": ["Wow.[ends the game]","Jason wait!", "Read the note"]},


     {"name": "jason_wait_prompt",
      "promptContent": "<p>Jason turns around slowly. The tears in her eyes tell you that she's hurt, and the rumble in her    tummy tells you that she's hungry.</p>",
      "promptImage": "/assets/bindle_baby.png",
      "promptChoices": ["Oh, I didn't think you'd turn back around. Uh, oh look there's a note written on my chest!","Crazy!", "I'm sad"]},

      {"name": "im_sad_prompt",
        "promptContent": '<p>Jason sigh, and puts down her bindle.</p><p>“Why are you sad?</p>',
        "promptImage": "/assets/bindle_baby.png",
        "promptChoices": ["My chest hurts.", "Sometimes I jump to try to hug the sun but it's too far away. Somtimes I think it'll always be too far away"]
    },

    {"name": "hug_the_sun_prompt",
    "promptContent": "<p>I know I'm a baby that's been alive for maybe two minutes, but that seems like a remarkably   dumb thing to do.</p>",
    "promptImage": "/assets/bindle_baby.png",
    "promptChoices": ['You\'re a baby, what do you know?',
'I feel like a heel.']},

{"name": "feel_like_a_heel_prompt",
"promptContent": "<p>“sometimes we are tempted to run away from bad feelings. Especially when they are bad  feelings about ourselves. It's best to sit with those feelings and reflect on how you can do better  in the future.”</p><p>“For example for the last minute and a half you have had blood dripping down your torso  because you have a letter stapled to your chest. Maybe it would be a good idea to read that letter.”</p>",
"promptImage": '/assets/bindle_baby.png',
"promptChoices": ["Fine! I'll read the letter!",
"Can you read the letter to me?"]},

{"name": "can_you_read_letter",
 "promptContent": "<p> No </p>",
  "promptImage": '/assets/bindle_baby.png',
  "promptChoices": ["Okay"]
},

{"name": "you_are_a_baby",
"promptContent": '<p>"It depends on whether you prescribe to a Tabula Rasa school of epistemology, or if Innatism is more your bag. The Tabula Rasa or \'blank slate\', mode of thinking holds that an individual is born with a blank mind ready to absorb knowledge or as have knowledge be inscribed into it, much like a scribe would a stone tablet like in ancient Greece. Innatism, conversely, posits that   the mind is born with certain ideas/knowledge.”</p>',
"promptImage": '/assets/bindle_baby.png',
"promptChoices": ["That was boring","That was informative. I assume the letter stapled to my chest will also be informative."]},


{"name": "boring_prompt",
"promptContent": "<p>“I'm sorry. Maybe my time in the woods alone as a baby will teach me how to be more appealing in conversations.”</p><p>Jason walks away forever. You feel the cold wind of loneliness crawl up your spine.</p>",
"promptImage": '/assets/bindle_baby.png',
"promptChoices": ["I miss Jason."]},

{"name": "chest_hurts",
"promptContent": '<p>"You Do Have a Note Stapled to It"</p>',
"promptImage": '/assets/bindle_baby.png',
"promptChoices": ["Hahahahahahahaha",
"Hm. I guess I should read this thing. Later Jason."]},


{"name": "haha_prompt",
"promptContent": '<p> You Never Stop Laughing</p>',
"promptImage": "/assets/bindle_baby.png",
"promptChoices": ["hahaha[ends game]"]},


{"name": "sign_me_up_prompt",
"promptContent": '<p>Baby Jason turns into the size of a roller blading pony and says, “Come on, jump on my back and I will take us away from this place. A place free from turmoil and judgement. Where you can be your self and flllyyyy” </p>',
"promptImage": "/assets/roller_horse.png",
"promptChoices": ["Hell the tits yeah!", "Never mind. You're a baby and i'm an adult and none of this seems real."]},

{"name": "never_mind_prompt",
"promptContent": '<p>Baby Jason sighs, and says okay.</p> <p>You come to your senses and realize you need a job, and you start to work on your resume.</p>',
"promptImage": "/assets/roller_horse.png",
"promptChoices": ["Great. Being an employed member of society sounds pretty reasonable.[end game]", "Fuck me. [end game]"]},

{"name": "tits_yeah_prompt",
"promptContent": '<p>You and Baby Jason gallop away having the kinds of adventures that other people only pretend    they have while playing useless games.</p>',
"promptImage": "/assets/roller_horse.png",
"promptChoices": ["cool, that was sick, but isn't this game about solving the murder of my family or something?"]},

{
    "name": "project_runway_prompt",
    "promptContent": '<p>You ignore the blood note stapled on your chest, and go to your living room.  Something about  it seems odd, a little askew. You step over the bodies of your murdered family and check your   thermostat to see that somebody turned it to a colder setting than you prefer. Feeling pretty   ticked-the-h-e-double-hockey-sticks-off you hop onto your crocodile skin couch  and turn on     project runway, it\'s a re-run of an episode you\'ve memorized all the lines of.</p> <p>Your chest hurts exactly at the place somebody stapled a note to it</p>',
    "promptImage": "/assets/project_runway.png",
    "promptChoices": ["read the note",
"recite all the lines of the show verbatim without blinking", "examine the bodies around you"]
},


{
    "name": "recite_lines_prompt",
    "promptContent": '<p>You recite every line of this particular episode of Project Runway verbatim, while doing the  greatest Heidi Klum impression anyone has never seen. It\'s actually so good that all the people on the show stop what they are doing, because now they just want to watch you do it. You get bored and want to stop, but you can\'t. There can\'t not be a Project Runway and if Heidi and whoever else on that show isn\'t going to do it, you have to. Your heart beat grows more  and more rapid. </p>',
    "promptImage": "/assets/project_runway.png",
    "promptChoices": ["The show must go on, continue giving the performance of a mother fucking lifetime", "oh hey, remember that note? Read it."]
},

{
    "name": "give_show_of_lifetime_prompt",
    "promptContent": '<p>Titty Mcdoogle-nuggets! You start to belt out some sick fashion critiques, and saying things   like “Nah I\'d like it better in orange” and “how about a little less sass and a little more fringe”,    you\'re becoming more Heidi Klum than the jewel of North Rhine-Westphalia herself.</p> <p>The cognitive dissonance, however, becomes too great so you take your shoes off and scream   into their soles because now you are a crazy person.</p> <p>The note on your chest rustles the kind of rustle suggesting it might cure your Klum Psychosis.</p>',
    "promptImage": "/assets/project_runway.png",
    "promptChoices": ["NOOO!!! I can't be crazy! My mother was crazy!", "I can give a better critique than that","Read the note"]
},


{
    "name": "better_critique_promt",
    "promptContent": "You're critique was garbage.",
    "promptImage": "/assets/project_runway.png",
    "promptChoices": ["In sucking so hard at giving even a semblance of a decent critique, you change back from Heidi Klum to miserable old you."]
},

{
    "name": "my_mom_was_crazy_prompt",
    "promptContent": "<p>Having a crazy mother doesn't make you exempt as a candidate for being potentially crazy.</p>",
    "promptImage": "/assets/project_runway.png",
    "promptChoices": ["Interesting. Maybe I should read the note", "Does it make me exempt as a candidate for the presidency?", "That makes me sad because I actually want to be like my mom."]
},

{
    "name": "want_to_be_like_my_mom",
    "promptContent": "<p>You think a lot about your mother. An incredibly kind woman with a terrific sense of humor,    she would always embarrass you by giving you raspberries in front of your friends. No, not  raspberries like the fruits, but a raspberry like putting her mouth on your tummy and   blowing on it to produce a silly flatulent like noise.</p> <p>You look down in deep contemplation and see the note that's been stapled on your chest this whole time.</p>",
    "promptImage": "/assets/project_runway.png",
    "promptChoices": ["read the note.", "Realize you'll never be half the woman your mother was, or half a glass of water either."]
},

{
    "name": "realize_glass_prompt",
    "PromptContent": "<p>You remember a Lao Tzu quote that goes something like “The one who rules like the mother   lasts long.</p>",
    "promptImage": "/assets/project_runway.png",
    "promptChoices": ["experience enlightenment", "read the note"]
},

{
    "name": "enlightment_prompt",
    "promptContent": "<p>You become one with all things, or rather, you realize that that is what you have been all along.  Go you. You turn into a beam of light that looks a lot like a neon sign that says \'Toronto\' and jettison off into the cosmos.</p>",
    "promptImage": "/assets/toronto.png",
    "projectChoices": ["word[end_game]"]
},


{
    "name": "presidency_prompt",
    "PromptContent": "<p>Unlikely. Having a parent stricken by mental illness is not a measure for whether or not a person may run for president of this country. The bi-laws for the presidency of condominium organizations or country clubs might be different though maybe look into that.</p> <p>The place where the note is stapled to your chest starts to spit blood.</p>",
    "promptImage": "/assets/project_runway_prompt.png",
    "promptChoices": ["Find the whole thing mighty suspect and just leave your house","Read the note"]
},

{
    "name": "leave_your_house_prompt",
    "promptContent": "<p>You walk out of your house, and see a deranged looking man with blood all over his hands.  He explains to you that he's the one that murdered your family and that he was sorry.</p>",
    "promptImage": "/assets/scary_door_man.png",
    "promptChoices": ["Give him a firm talking to, and tell him that he better not let that happen again, because if he does that will be strike two.", "Invite him in to watch Project Runway."]
},

{
    "name": "watch_project_runway_with_man_prompt",
    "promptContent": "<p>You and the guy sit on your crocodile skin couch and flip the tube to America's favorite show, Project Runway. You try to show him your Heidi Klum impression, but he doesn't seem super into it and you figure you'll try again later.</p>",
    "promptImage": "/assets/project_runway.png",
    "promptChoices": ["fall asleep[end game]"]
},


{
    "name":"examine_bodies_prompt",
    "promptContent": "<p>You look at each of the slaughtered bodies before your eyes. It's your family. They've been murdered. You can hear coughing and your eyes dart to your rapidly dying brother Dan. He beckons you to come close to talk to him.</p>",
    "promptImage":"/assets/bloody_hand.png",
    "promptChoices": ["talk to dan", "who's dan?", "Ignore him and read the note"]
},

{
    "name": "talk_to_dan_prompt",
    "promptContent": "<p>You kneel down next to Dan to hear him speak.</p> <p>“Somebody murdered me. And Mom and Dad too. The note on your chest explains it.</p>",
    "promptImage": "/assets/bloody_hand.png",
    "promptChoices": ["Who's Mom and Dad?", "Are you accusing me?", "Oh sweet I should read the note"]
},


{
    "name": "accusing_me_prompt",
    "PromptContent": "<p>Yes, and now I'm going to take you to hell with me you bastard. I have always been the superior son, and am prepared to make the best of my dying breath to end you now!</p> <p>Your brother rips out one of his ribs and stabs you in the eye with it.</p>",
    "promptImage": "/assets/bloody_hand.png",
    "projectChoices": ["die[(rib in eye death)]", "read the note."]
},


{
    "name": "who_mom_dad_prompt",
    "promptContent": "<p>Mom and Dad is what we call our parents. They got naked and smashed their bodies against  each other a bunch of times to make you and me.</p><p>You used to call them Battery and Be-Bop Commander 12, but they told you to stop it because those aren't their names. No one knows what their names are because they forgot so now  you call them mom and dad which, I assume you think, is polish for Battery and Be-Bop Commander 12.</p>",
    "promptImage": "/assets/dorky_parents.png" ,
    "promptChoices": ["Oh sweet, I'll read the note now.", "Are you lying?"]
},

{
    "name":"lying_prompt",
    "promptContent": "<p>'No'</p>",
    "promptImage": "/assets/dorky_parents.png",
    "promptChoices": ["Oh sweet, I'll read the note now.", "Are you sure?"]
},


{
    "name": "are_you_sure_prompt",
    "promptContent": "<p>No I'm not sure, I'm a caterpillar.</p><p>Then your brother died choking on his own blood.</p>",
    "promptImage": "/assets/dorky_parents.png",
    "promptChoices": ["Oh sweet, I'll read the letter now."]
},

{
    "name": "whos_dan_prompt",
    "promptContent": "<p>Dan is your brother. He taught you how to ride a bike and skip rocks. Sure he can be a jerk sometimes but he didn't tell mom and dad about that thing you did. He's dying now.</p>",
    "promptImage": "/assets/douch_dan.png",
    "promptChoices": ["talk to dan", "die with dan"]
},


{
    "name": "die_rib_prompt",
    "promptContent": "<p>The shock of getting stabbed in the eye with a rib puts you into cardiac arrest and you die but not before you say, “an eye for a rib eye,”  pull the rib out and stab Dan with it.</p><p>Dan laughs, and says “Fool! A man can not die by his own rib, by striking me with mine own rib you have only made me stronger!” Who is dan talking to? Dead you? Dead defeated you? You're dead. Dan is dead now too.</p>",
    "promptImage": "/assets/douch_dan.png",
    "promptChoices": ["[end game]"]
},


{
    "name": "die_with_dan",
    "promptContent": "<p>Not to be one upped by that asshole Dan, you will yourself to die before he does.</p>",
    "promptImage": "/assets/douch_dan.png",
    "promptChoices": ["[end game]"]
},

{
    "name":"gluten_prompt",
    "promptContent": "<p>Gluten can be scary, and it seems to be everywhere, but luckily a quick google search on your  phone revealed to you that it's not in paper so you can relax.</p><p>Your doorbell rings again</p>",
    "promptImage": "/assets/sandwhich.png",
    "promptChoices": "answer your door"

},

{
    "name": "answer_door_prompt",
    "PromptContent": "<p>You get out of bed, and and walk to your living room.  There you see the bodies of your deceased relatives, it's kind of a pain to have to walk over them to answer the door.</p> <p>When you open the door you see a man in a trench coat and fedora with an advertisement for the Dark Knight, he introduced himself as     Detective Wallace, no relation to William Wallace. You tell him that you didn't assume there    was a relationship. Embarrassed, he quickly changes the subject.</p> <p>“Your family has been murdered, the feds are all over the case, but the thing is we already know    who did it. It was Jake O'Malley. Famed diamond thief and family killer. He lives two blocks    from here, we need you to give him the firmest talking to anybody has ever given.”</p>",
    "promptImage": "/assets/detective_wallce.png",
    "promptChoices": ["I\'m going to give him a talking to firmer than a handshake between two coked out business executives.", "Can\'t you see that I\'m in mourning?", "What\'s this guy\'s problem?" ]
},

{
    "name": "guys_problem_prompt",
    "PromptContent": "<p>\"It's hard to say for certain, but violence is sometimes symptomatic of a larger issue within a persons psychology. So really this could have happened for a number of reasons. Some might     try to interpret it as the tragic act of an individual tormented by isolation, others might say the     perpetrator was simply a sick, hate filled individual.\"</p><p>“ Or Maybe you're family was annoying. The possibilities are endless.”</p>",
    "promptImage": "/assets/detective_wallce.png",
    "promptChoices": ["I don't like that explanation, but I respect it. I'll firmly talk to this dude."]
}, 

{
    "name": "mourning_prompt",
    "promptContent": "<p>“Of course, and I am terribly sorry. The trouble is, however, that if you don't give this guy a firm talking to soon he might do it again.”</p>",
    "promptImage": "/assets/detective_wallce.png",
    "promptChoices": ["But how do we know that he'll listen to me?","Maybe I should give you a firm talking to", "I thought I had laid my firm talking to days to rest a long time ago, but very well."]
},


{"name": "listen_to_me_prompt",
"promptContent": "<p> \"What choice will he have?\" </p>",
"promptImage": "/assets/detective_wallce.png",
"promptChoices": ["Good point. Let me do some vocal exercises for a minute first."]},


{
    "name": "give_you_firm_talk_prompt",
    "promptContent": "<p>“As a P.I. my life can get pretty lonely. I live primarily in stinging obscurity. Having  somebody pay enough attention to me to actually bother to give me a lecture would mean a lot.   But before you do would you mind if,” the detective pauses to take off his hat, “I call you papa?” </p>",
    "promptImage": "/assets/detective_wallce.png",
    "promptChoices": ["You made this weird", "I'd be honored"]
},


{
    "name": "honored_prompt",
    "promptContent": "You spend the rest of the day lecturing the lonely detective about the meaning of loss . The detective's eyes water with salty tears of happiness, because now he's finally free.",
    "promptImage": "/assets/detective_wallce.png",
    "promptChoices": ["[end game]"]
},

{
    "name": "you_made_weird_prompt",
    "promptContent": "<p>“Right, of course. Please pardon my behavior. Do you think you can talk to that guy Jake  Though?”</p>",
    "promptImage": "/assets/detective_wallce.png",
    "promptChoices": ["fine"]
},

{
    "name": "firm_talking_to_prompt",
    "PromptContent": "<p> SOME STUFF </p>",
    "promptImage": "/assets/murder_dog.png",
    "promptChoices": ["none it's over"]
},


{
    "name": "end_of_days",
    "promptContent": "Thanks for playing. If you found the person that murdered your family, far out, go you. If not, also far out. Come again next Christmas!",
    "promptImage": "/assets/finito.png",
    "promptChoices": ["play again.", "forget this even happened."]
}
]
}


var game_prompts = murdered_family_game["prompts"]

var generate_prompt = function(prompt){
    $(".prompt_image img").attr("src", prompt["promptImage"])

    $(".current_prompt").html(prompt["promptContent"])
}



var generate_choices = function(choice_array){
    choice_array.forEach(function(choice){
        $(".option_select_" + (choice_array.indexOf(choice) + 1)).html(choice)

        $(".option_select_" + (choice_array.indexOf(choice) + 1)).parent().attr("id", choice.split(" ").join("_").replace(/[!*?*'*,*.*]/g, ""))
    });
}


$(document).ready(function(){
    
    generate_prompt(game_prompts[0])

    generate_choices(game_prompts[0]["promptChoices"]);


    game_prompts.forEach(function(prompt){
        var arrayLength = prompt["promptChoices"].length


//now that you can access the individual choices on click, you now have to replace the image, content, and choices based off the new prompt that that choice creates 

// this is how you iterate through an array
 for (var i = 0; i < arrayLength; i++) {


if ($("#" + prompt["promptChoices"][i].split(" ").join("_").replace(/[!*?*'*,*.*]/g, "") + ":first-child").length){



    $("#" + prompt["promptChoices"][i].split(" ").join("_").replace(/[!*?*'*,*.*]/g, "") + ":first-child").on("click", (function(event){
        event.preventDefault();


        console.log(i)

         console.log(arrayLength)

        // generate_prompt(game_prompts[i])

        // console.log("shwing");
    }))
  }
}


 
    });

    // $(".option_select_3").on("click", (function(event){
    //         event.preventDefault();

    //     $(".current_prompt").html(game_prompts[1]["promptContent"])

    //     // $(".option_select_3").attr("class", game_prompts[1]["name"])

    //     $(".prompt_image img").attr("src", game_prompts[1]["promptImage"])


    //     generate_choices(game_prompts[1]["promptChoices"])

    // }))

});






