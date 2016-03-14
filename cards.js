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
      var abilities = ["Nullify an ability as an interrupt.", "Discard the wandering hero.", "Renew one of your hero's abilities.", "Block someone from recruiting.", "Look at the wandering hero.", "Main player may send any hero.", "Draw two cards into your hand."];
      var needed = ["Number 3 or lower", "Number 5 or higher", "Number 3-5", "Odd number", "Even number", "Number of players or lower", "Number of players or higher"];
      var num = Math.floor((i-1) / 11) + 1;
      var seventhhero = '<div class="seventhhero inner"><div class="text">';
      seventhhero += "<b>Seventh Hero</b>"
      seventhhero += '<span class="spacing">' + num + " " + names[num-1] + "</span><br/>";
      seventhhero += abilities[num-1] + "<br/>" + needed[num-1];
      seventhhero += "</div></div>";
      inner += seventhhero;
    }

    if (1 <= i && i <= 64) {
      var bugs = ["Cockroach", "Bat", "Fly", "Toad", "Rat", "Scorpion", "Spider", "Stink Bug"];
      var bug = bugs[Math.floor((i-1) / 8)];
      var cockroachpoker = '<div class="cockroachpoker inner"><div class="text">';
      cockroachpoker += "<b>Cockroach Poker</b>"
      cockroachpoker += '<span class="spacing">' + bug + "</span>";
      cockroachpoker += "</div></div>";
      inner += cockroachpoker;
    }

    if (61 <= i && i <= 76) {
      var players = ["Werewolf", "Werewolf", "Villager", "Villager", "Villager", "Seer", "Robber", "Insomniac", "Troublemaker", "Minion", "Doppelg&auml;nger", "Mason", "Mason", "Drunk", "Tanner", "Hunter"];
      var player = players[i - 61];
      var onenight = '<div class="onenight inner"><div class="text">';
      onenight += "<b>One Night</b>";
      onenight += '<span class="spacing">' + player + "</span>";
      onenight += "</div></div>";
      inner += onenight;
    }

    if (1 <= i && i <= 104) {
      var cattle = 1;
      if (i % 10 == 5) {
        cattle = 2;
      }
      if (i % 10 == 0) {
        cattle = 3;
      }
      if (i % 11 == 0) {
        cattle = 5;
      }
      if (i == 55) {
        cattle = 7;
      }
      var nimmt = '<div class="nimmt inner"><div class="text">';
      nimmt += "<b>6 Nimmt!</b>";
      nimmt += '<span class="spacing">' + cattle + " cattle</span>";
      nimmt += "</div></div>";
      inner += nimmt;
    }

    if (78 <= i && i <= 93) {
      var nums = [1, 1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 8];
      var names = ["Guard", "Priest", "Baron", "Handmaid", "Prince", "King", "Countess", "Princess"];
      var abilities = ["Correctly guess another player's non-Guard card to get them out.", "Look at another player's hand.<br/>&nbsp;", "Secretly compare hands. The player with the lower value is out.", "Until your next turn, ignore all effects from other player's cards.", "Choose a player to discard their hand and draw a new card.", "Trade hands with another player.<br/>&nbsp;", "Discard this card if you have the King or Prince.", "If you discard this card, you are out of the round."];
      var index = i - 78;
      var num = nums[index];
      var name = names[num - 1];
      var ability = abilities[num - 1];
      var loveletter = '<div class="loveletter inner"><div class="text">';
      loveletter += "<b>Love Letter</b> ";
      loveletter += '<span class="spacing">' + num + " " + name + '</span><br/>';
      loveletter += ability;
      loveletter += "</div></div>";
      inner += loveletter;
    }

    var games = [];
    if (2 <= i && i <= 99) {
      games.push("<b>The Game</b>");
    }
    if (3 <= i && i <= 35) {
      games.push("<b>No Thanks!</b>");
    }
    var others = '<div class="others inner"><div class="text">';
    others += games.join(" + ") + "&nbsp;";
    others += "</div></div>";
    inner += others;

    $("body").append('<div class="card">' + inner + '</div>');
  }
});