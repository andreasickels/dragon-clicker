var coins = 0;
var clicks = 0;
var totalCoins = 0;
var coinsPerSecond = 0;
var clickPower = 1;
var ascendNum = 0;
var cursorCost = 10;
var cursors = 0;
var farmCost = 100;
var farms = 0;
var towerCost = 560;
var towers = 0;
var castleCost = 1200;
var castles = 0;
var fairyCost = 2800;
var fairies = 0;

function eggBreak1() {
if (clicks >= 10 && ascendNum == 0){
  document.getElementById("egg").src = "eggY.png";
	}
}

function eggBreak2() {
if (clicks >= 100 && ascendNum == 0){
  document.getElementById("egg").src = "eggZ.png";
	}
}

function eggBreak3() {
if (clicks >= 150 && ascendNum == 0){
  document.getElementById("egg").src = "dragonX.png";
	}
}

function play() {
        var audio = document.getElementById("audio");
        audio.play();
}


function buyCursor() {
 if (coins >= cursorCost) {
	coins = coins - cursorCost;
	cursors = cursors + 1;
	cursorCost = Math.round(cursorCost * 1.5);

	document.getElementById("coins").innerHTML = coins ;
	document.getElementById("cursorcost").innerHTML = cursorCost;
	document.getElementById("cursors").innerHTML = cursors;
	updateCoinsPerSecond();
	}
}

function buyFarm() {
if (coins >= farmCost) {
	coins = coins - farmCost;
	farms = farms + 1;
	farmCost = Math.round(farmCost * 1.5);

	document.getElementById("coins").innerHTML = coins ;
	document.getElementById("farmcost").innerHTML = farmCost;
	document.getElementById("farms").innerHTML = farms;
	updateCoinsPerSecond();
	}
}

function buyTower() {
if (coins >= towerCost) {
	coins = coins - towerCost;
	towers = towers + 1;
	towerCost = Math.round(towerCost * 1.5);

	document.getElementById("coins").innerHTML = coins ;
	document.getElementById("towercost").innerHTML = towerCost;
	document.getElementById("towers").innerHTML = towers;
	updateCoinsPerSecond();
	}
}

function buyCastle() {
if (coins >= castleCost) {
	coins = coins - castleCost;
	castles = castles + 1;
	castleCost = Math.round(castleCost * 1.5);

	document.getElementById("coins").innerHTML = coins ;
	document.getElementById("castlecost").innerHTML = castleCost;
	document.getElementById("castles").innerHTML = castles;
	updateCoinsPerSecond();
	}
}

function buyFairy() {
if (coins >= fairyCost) {
	coins = coins - fairyCost;
	fairies = fairies + 1;
	fairyCost = Math.round(fairyCost * 1.5);

	document.getElementById("coins").innerHTML = coins ;
	document.getElementById("fairycost").innerHTML = fairyCost;
	document.getElementById("fairies").innerHTML = fairies;
	updateCoinsPerSecond();
	}
}

	function addToCoins(amount) {
		coins = coins + amount;
		document.getElementById("coins").innerHTML = coins;
	}

	function addTotalCoins() {
		totalCoins = coins + cursors + (farms * 5) + (towers * 10) + (castles * 20) + (fairies * 30);
		document.getElementById("totalcoins") = totalCoins;
	}

	function addToClicks(clickPower) {
		clicks = clicks + clickPower;
	}

	function updateCoinsPerSecond() {
		coinsPerSecond = (cursors) + (farms * 5) + (towers * 10) + (castles * 20) + (fairies * 30);
		document.getElementById("coinspersecond").innerHTML = coinsPerSecond;
	}

	setInterval(function() {
		coins = coins + cursors;
		coins = coins + farms * 5;
		coins = coins + towers * 10;
		coins = coins + castles * 20;
		coins = coins + fairies * 30;
		document.getElementById("coins").innerHTML = coins;
	if (coins == 1) {
		document.title = coins + "  coin - Dragon Clicker";
		} else {
		document.title = coins + "  coins - Dragon Clicker";
		}
	}, 1000);

	setInterval(function() {
	totalCoins = totalCoins + coinsPerSecond;
	eggBreak1();
	eggBreak2();
	eggBreak3();
	}, 1000);		