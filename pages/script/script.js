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

const handleOnMouseMove = e => {
  const {
    currentTarget: target
  } = e;

  const rect = target.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;

  target.style.setProperty("--mouse-x", `${x}px`);
  target.style.setProperty("--mouse-y", `${y}px`);
}

for (const card of document.querySelectorAll(".card")) {
  card.onmousemove = e => handleOnMouseMove(e);
}

document.addEventListener("DOMContentLoaded", function() {

var supports = document.querySelectorAll('.cover_support');

supports.forEach(function(support) {
  support.src = "/assets/roles/support-hover.webp";
});



var mid = document.querySelectorAll('.cover_mid');

mid.forEach(function(mid) {
  mid.src = "/assets/roles/mid-hover.webp";
});



var jungle = document.querySelectorAll('.cover_jungle');

jungle.forEach(function(jungle) {
  jungle.src = "/assets/roles/jungle-hover.webp";
});


var bot = document.querySelectorAll('.cover_bot');

bot.forEach(function(bot) {
  bot.src = "/assets/roles/bottom-hover.webp";
});


var tob = document.querySelectorAll('.cover_top');

tob.forEach(function(tob) {
  tob.src = "/assets/roles/top-hover.webp";
});

  const searchInput = document.getElementById('searchInput');
  const cards = document.querySelectorAll('.card');

  searchInput.addEventListener('input', function () {
    const query = this.value.toLowerCase();

    cards.forEach(card => {
      const id = card.id.toLowerCase();
      card.classList.toggle('hidden', !id.includes(query));
    });
  });

});

function expandChampion(champCard) {

  if (champCard.style.width === "10cqw") {
    champCard.style.width = "30cqw";
    champCard.style.borderRadius = "1cqw";
  } else {
      champCard.style.width = "10cqw";
      champCard.style.borderRadius = "5cqw";
  }

  console.log("Test button")
}

const buttons = document.querySelectorAll('.role-icon');
const cards = document.querySelectorAll('.card');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedRole = button.getAttribute('data-role');

    cards.forEach(card => {
      const cardRole = card.getAttribute('data-role');

      if (selectedRole === 'all' || cardRole === selectedRole) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});


