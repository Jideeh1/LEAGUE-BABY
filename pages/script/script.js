// Comments just in case someone snoop on my code through inspect element
var messageOne = "If you're here to scrutinize the logic of my code, reconsider before your head starts hurting.\n\n";
var messageTwo = "It'd be a big mistake trying to read my HTML and JavaScript. My css however... I'm proud of the way I arranged it.\n\n";
var messageThree = "Want to take a peek? Go to Sources`.`\n\n";
var messageFour = "Seriously though, if you just want to take some JS functions, or see how I styled my elements, the code is open-source in my github.\n\n";
var messageFive = "find it on: https://github.com/Jideeh1\n\n";
var messageSix = "Just don't start complaining when you `see how ass I write code. ーｗー\n\n";
var signature = "Yours Truly, Jideeh\n\n";

console.log(messageOne + messageTwo + messageThree + messageFour + messageFive + messageSix + signature);

const roles = ['ADC', 'SUPP', 'TOP', 'MID', 'JUNGLE'];
const el = document.querySelector('.role');
let i = 0;

setInterval(() => {
  el.style.setProperty('--role-text', `"${roles[i]}"`);
  i = (i + 1) % roles.length;
}, 1000);



function sortTop() {
  var top = document.getElementById('top');

  if (top.src.endsWith("/assets/roles/top.png")) { 
    top.src = "/assets/roles/top-hover.webp";
  } else {
    top.src = "/assets/roles/top.png";
  }
  console.log(top.src + "is this working????")
}

function sortJungle() {
  var top = document.getElementById('jungle');

  if (top.src.endsWith("/assets/roles/jungle.png")) { 
    top.src = "/assets/roles/jungle-hover.webp";
  } else {
    top.src = "/assets/roles/jungle.png";
  }
  console.log(jungle.src + "is this working????")
}

function sortMid() {
  var top = document.getElementById('mid');

  if (top.src.endsWith("/assets/roles/mid.png")) { 
    top.src = "/assets/roles/mid-hover.webp";
  } else {
    top.src = "/assets/roles/mid.png";
  }
  console.log(mid.src + "is this working????")
}

function sortSupport() {
  var top = document.getElementById('support');

  if (top.src.endsWith("/assets/roles/support.png")) { 
    top.src = "/assets/roles/support-hover.webp";
  } else {
    top.src = "/assets/roles/support.png";
  }
  console.log(support.src + "is this working????")
}

function sortBot() {
  var top = document.getElementById('bot');

  if (top.src.endsWith("/assets/roles/bottom.png")) { 
    top.src = "/assets/roles/bottom-hover.webp";
  } else {
    top.src = "/assets/roles/bottom.png";
  }
  console.log(bot.src + "is this working????")
}


