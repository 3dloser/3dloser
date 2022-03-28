// call sentence generator function when button is clicked
document.getElementById("generateButton").addEventListener("click", generateSentences);

// create functions to pick sentence from the possible sentences from the array
function sentence1(){
    var index = Math.floor(Math.random() * (sentences.length));
    document.getElementById("p1").innerHTML = sentences[index];
}
function sentence2(){
    var index = Math.floor(Math.random() * (sentences.length));
    document.getElementById("p2").innerHTML = sentences[index];
};
function sentence3(){
    var index = Math.floor(Math.random() * (sentences.length));
    document.getElementById("p3").innerHTML = sentences[index];
};
function sentence4(){
    var index = Math.floor(Math.random() * (sentences.length));
    document.getElementById("p4").innerHTML = sentences[index];
};
function sentence5(){
    var index = Math.floor(Math.random() * (sentences.length));
    document.getElementById("p5").innerHTML = sentences[index];
};

// create function to generate all 5 sentences
function generateSentences() {
    sentence1();
    sentence2();
    sentence3();
    sentence4();
    sentence5();
}

// create array with collection of all possible sentences
var sentences = [
    "diamonds are forever",
    "you only live twice",
    "the world is not enough",
    "tomorrow never dies",
    "die another day",
    "never say never again",
    "live and let die",
    "dog is my pilot",
    "dreams do come true",
    "there's no time like the present",
    "if it ain't broke, don't fix it",
    "life finds a way",
    "this is not a pipe",
    "it's not about the pasta",
    "follow your heart",
    "your intuition",
    "it will lead you in the right direction",
    "let go of your mind", 
    "just follow your heart baby",
    "there's always money in the banana stand",
    "no touching",
    "always leave a note",
    "justice is blind",
    "we're having a fire sale",
    "vodka goes bad once it's opened",
    "set a steamer basket above boiling water",
    "add eggs in one layer",
    "close the pot",
    "8 minutes for creamy yolks",
    "5 mintues for runny yolks",
    "yesterday was thursday",
    "today is friday",
    "fun, fun, fun, fun",
    "love is a many-splendored thing",
    "love is a battlefield",
    "all you need is love",
    "love will tear up apart",
    "love will keep us together",
    "love will find a way",
    "sit using ideal posture",
    "adjust any support for your chair",
    "sit close to your",
    "keep your head elevated",
    "take deep breaths",
    "take small breaks",
    "who run the world? Girls (girls)",
    "there is a santa claus",
    "fuzzy wuzzy was a bear",
    "sally sells seashells by the seashore",
    "it ain't over till it's over",
    "it's not bragging if you can back it up",
    "simplify, simplify, simplify",
    "don't go chasing waterfalls",
    "always be closing",
    "a hot dog is a sandwich",
    "hold your ground!",
    "it's wine time",
    "time to wine down",
    "wine helps me adult",
    "i drink my wine on the patio",
    "I'm outdoorsy",
    "you do the hokey pokey",
    "hate has no home here",
    "diversity makes us stronger",
    "science is real",
    "no human is illegal",
    "we can make a difference",
    "kindness is everything",
    "the earth is round",
    "love is blind",
    "practice makes perfect",
    "a penny saved is a penny earned",
    "genius is 1% inspiration and 99% perspiration",
    "santa is not real",
    "women don't respect salad eaters",
    "yada yada yada",
    "war, what is it good for?",
    "it's not a lie if you believe it",
    "there's no i in team",
    "you snooze you lose",
    "slow and steady wins the race",
    "butter makes it better",
    "better safe than sorry",
    "the matrix is everywhere",
    "measure twice cut once",
    "hindsight is 20/20",
    "less is more",
    "this website is free",
    "it's not rocket science",
    "it's now or never",
    "the proof is in the pudding",
    "home is where the heart is",
    "bernie would have won",
    "leave britney alone please",
];

// call color generator function when button is clicked
document.getElementById("colorButton").addEventListener("click", generateColors);
function generateColors(){
    p1Color();
    p2Color();
    p3Color();
    p4Color();
    p5Color();
}

// generate colors individually
document.getElementById("p1").addEventListener("click", p1Color);
document.getElementById("p2").addEventListener("click", p2Color);
document.getElementById("p3").addEventListener("click", p3Color);
document.getElementById("p4").addEventListener("click", p4Color);
document.getElementById("p5").addEventListener("click", p5Color);

// generate color for p1
function p1Color(){
    // generate rgb colors
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var color = "rgb(" + r + ',' + g + ',' + b + ")";
    document.getElementById("p1").style.color = color;
}

// generate color for p2
function p2Color(){
    // generate rgb colors
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var color = "rgb(" + r + ',' + g + ',' + b + ")";
    document.getElementById("p2").style.color = color;
}

// generate color for p3
function p3Color(){
    // generate rgb colors
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var color = "rgb(" + r + ',' + g + ',' + b + ")";
    document.getElementById("p3").style.color = color;
}

// generate color for p4
function p4Color(){
    // generate rgb colors
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var color = "rgb(" + r + ',' + g + ',' + b + ")";
    document.getElementById("p4").style.color = color;
}

// generate color for p5
function p5Color(){
    // generate rgb colors
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var color = "rgb(" + r + ',' + g + ',' + b + ")";
    document.getElementById("p5").style.color = color;
}