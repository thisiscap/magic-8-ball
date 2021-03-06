//
// Where the magic happens
//

// Array of responses

var responses = [
  "It is certain",
  "It is decidedly<br>so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most<br>likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you<br>now",
  "Cannot predict<br>now",
  "Concentrate and ask again",
  "Don\’t count on it",
  "My reply<br>is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
]

// Define elements

var response = document.getElementById('response');
var responseContainer = document.getElementById('response-container');

// Magic 8 Ball function

function magicEightBall() {
  var randomiser = Math.floor(Math.random() * (responses.length));

  // Output random response
  response.innerHTML = responses[randomiser];

  // Create randomised values for CSS 3D transform animation
  var xDeg = Math.floor(Math.random() * 2); // Either 1 or 0
  var yDeg = Math.floor(Math.random() * 2); // Either 1 or 0
  var zDeg = Math.floor(Math.random() * 2); // Either 1 or 0
  var deg = Math.floor(Math.random() * (80 - 20 + 1)) + 20; // Between 20-80deg
  var restingRotation = Math.floor(Math.random() * 11) - 5; // Between -5 and 5deg

  // Create style tag to populate with CSS animation
  var style = (function () {
    var style = document.createElement("style");
    style.appendChild(document.createTextNode(""));
    document.head.appendChild(style);
    return style;
  })();

  // Populate created style tag with CSS animation property that uses randomised values
  style.sheet.insertRule('@keyframes transformAndScale { 0% { transform-origin: 50% 50%; transform: rotate3d(' + xDeg + ', -' + yDeg + ',' + zDeg + ',' + deg + 'deg) scale3d(.8, .8, .8); } 100% { transform: rotate3d(0,0,1,' + restingRotation + 'deg); } }', 0);

  // Add .class tied to animations
  responseContainer.classList.add('response--ready');
}

// Run on page load
document.addEventListener('DOMContentLoaded', magicEightBall(), false);

// Run on use of the 'Ask again'
document.addEventListener('click', function (event) {
  if (!event.target.matches('#js-response-refresh')) return;
  event.preventDefault();
  responseContainer.classList.remove('response--ready');
  void response.offsetWidth;
  magicEightBall();
});
