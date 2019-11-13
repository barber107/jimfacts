//quote array
var facts = ["Blank", "\"The definition of Marque is: (noun) a make of car, as distinct from a specific model. marques such as Bentley, Ferrari, or Porsche\"<br><em>Jim Tatz</em>","\" Did you know that Orlando Airport has a hyper-realistic sculpture of a sleeping traveler by Artist Duane Hanson? \"<br><em>Jim Tatz</em>","\" Did you know that Chinese fortune cookies are called \'American Fortune Cookies\' in China? There is nothing Chinese About them. \"<br><em>Jim Tatz</em>","\" Buzz Aldrin was the first man to pee while standing on the surface of the moon. \"<br><em>Jim Tatz</em>","\" The hot water from the coffee maker IS REEALLY HOT \"<br><em>Jim Tatz</em>","\" Some security systems use FLIR cameras...Because what would be cooler than seeing temperatures \"<br><em>Jim Tatz</em>","\" I saw a guy in a full business suit sprinting for a crosswalk today carrying a big stuffed panda in his arms. \"<br><em>Jim Tatz</em>","\" The hot water from the coffee maker is 330.372 degrees kelvin or 135 F for hoomans \"<br><em>Jim Tatz</em>",];
// add a new line "\"Either I will find a way, or I will make one.\"<br> - Philip Sidney",
// "\" TEXT \"<br><em>Jim Tatz</em>",
// Increment the random * # by 1
function genFact() {
  var randNum = Math.floor(Math.random() * 8) + 1;
  document.getElementById('factDisplay').innerHTML = facts[randNum];
  var tweetFact = facts[randNum].split(' ').join('%20');
  tweetFact = tweetFact.split('<br>').join('');
  tweetFact = "https://twitter.com/intent/tweet?text=" + tweetFact.split('"').join('')
  $('.twitter-share-button').attr('href', tweetQuote);
}
