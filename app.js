//Шооны зургийг үзүүлэх элементийг DOM-оос хайж олоод энд хадгална.
var dice = document.querySelector(".dice");

var activePlayer;
var scores;
var roundScore;
var isNewGame;
function initGame() {
  // Тоглогчийн ээлжийг хадгалах хувьсагч, 1-р тоглогчийн 0, 2-р тоглогчийг 1 гэж тэмдэглэе
  activePlayer = 0;
  //Тоглогчдын цуглуулсан оноог хадгалах оноог хадгалах хувьсагч
  scores = [0, 0];
  //Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах оноо
  roundScore = 0;
  //Шооны аль талаараа буусныг хадгалах хувьсагч, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүй үүсгэж өгнө.

  //Програм эхлэхэд бэлтгэе
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.remove(".winner");
  document.querySelector(".player-1-panel").classList.remove(".winner");

  document.querySelector(".player-0-panel").classList.remove(".active");
  document.querySelector(".player-1-panel").classList.remove(".active");

  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.add(".active");

  isNewGame = true;

  dice.style.display = "none";
}

initGame();

//Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame) {
    var diceNumber = Math.ceil(Math.random() * 6);
    dice.style.display = "block";
    dice.src = "dice-" + diceNumber + ".png";
    //Буусан тоо нь 1-ээс ялгаатай бол Тоглогчийн ээлжийн оноог өөрчилнө.
    if (diceNumber !== 1) {
      roundScore += diceNumber;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      changePlayer();
    }
  } else {
    alert("Тоглоом дууссан байна. Тоглоомыг шинээр эхлүүлнэ үү.");
  }
});
//Hold tochnii eventListener
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
    scores[activePlayer] += roundScore;
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 50) {
      isNewGame = false;
      document.getElementById("name-" + activePlayer).textContent = "WINNER!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
    } else {
      changePlayer();
    }
  } else {
    alert("Тоглоом дууссан байна. Тоглоомыг шинээр эхлүүлнэ үү.");
  }
});

function changePlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.toggle("active");
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.toggle("active");
  dice.style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", initGame);
