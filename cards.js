$(document).ready(function() {
  for (var i = 1; i <= 108; i++) {
    var inner = "";

    var numbering = '<div class="numbering inner"><div class="text">';
    numbering += i;
    numbering += "</div></div>";
    inner += numbering;

    var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
    var jokers = ["J1", "J2", "J3", "J4"];
    var playingcard = '<div class="playingcard">';
    if ((i-1) % 54 < 52) {
      var cardIndex = (i-1) % 54;
      var num = cardIndex % 13 + 1;
      var suit = suits[Math.floor(cardIndex / 13) % 4];
      playingcard += num + " ";
      playingcard += '<img src="img/' + suit + '.png" class="suitimg">';
    } else {
      var joker = jokers[((i-1) % 54) - 52 + 2 * Math.floor((i-1) / 54)];
      playingcard += joker;
      playingcard += '<img src="img/joker.png" class="jokerimg">';
    }
    playingcard += "</div>";
    inner += playingcard;

    if (1 <= i && i <= 60) {
      var nums = ["1", "1", "1", "2", "2", "3", "3", "4", "4", "5"];
      var colors = ["white", "yellow", "red", "green", "blue", "rainbow"];
      var num = nums[(i-1) % 10];
      var color = colors[Math.floor((i-1) / 10)];
      var hanabi = '<div class="hanabi inner"><div class="text">';
      hanabi += "<b>Hanabi</b>";
      hanabi += '<span class="spacing">' + num + " " + color + '</span>';
      hanabi += "</div></div>";
      inner += hanabi;
    }

    if (1 <= i && i <= 77) {
      var names = ["Shield Maiden", "Wyrm Slayer", "Chieftain", "Outcast", "Oracle", "Tale Weaver", "Forest Strider"];
      var abilities = ["Nullify an ability as an interrupt.", "Discard the wandering hero.", "Renew one of your hero's abilities.", "Another player of your choice cannot recruit the wandering hero.", "Look at the wandering hero.", "Main player may send any hero.", "Draw two cards into your hand."];
      var needed = ["Number 3 or lower", "Number 5 or higher", "Number 3-5", "Odd number", "Even number", "Number of players or lower", "Number of players or higher"];
      var num = Math.floor((i-1) / 11) + 1;
      var seventhhero = '<div class="seventhhero inner"><div class="text">';
      seventhhero += "<b>Seventh Hero</b>"
      seventhhero += '<span class="spacing">' + num + " " + names[num-1] + "</span><br/>";
      seventhhero += abilities[num-1] + "<br/>" + needed[num-1];
      seventhhero += "</div></div>";
      inner += seventhhero;
    }

    $("body").append('<div class="card">' + inner + '</div>');
  }
});