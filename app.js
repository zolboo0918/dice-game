// Тоглогчийн ээлжийг хадгалах хувьсагч, 1-р тоглогчийн 0, 2-р тоглогчийг 1 гэж тэмдэглэе
var activePlayer = 0;
//Тоглогчдын цуглуулсан оноог хадгалах оноог хадгалах хувьсагч
var scores = [0, 0];
//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах оноо
var roundScore = 0;
//Шооны аль талаараа буусныг хадгалах хувьсагч, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүй үүсгэж өгнө.

//Програм эхлэхэд бэлтгэе
document.getElementById("score-0").textContent = "0";

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").innerHTML = "0";
document.getElementById("current-0").innerHTML = "0";
document.getElementById("current-1").innerHTML = "0";

var dice = document.querySelector(".dice");
dice.style.display = "none";

//Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.ceil(Math.random() * 6);
  dice.style.display = "block";
  dice.src = "dice-" + diceNumber + ".png";
  //Буусан тоо нь 1-ээс ялгаатай бол Тоглогчийн ээлжийн оноог өөрчилнө.
  if (diceNumber !== 1) {
    roundScore += diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    changePlayer();
  }
});
//Hold tochnii eventListener
document.querySelector(".btn-hold").addEventListener("click", function () {
  scores[activePlayer] += roundScore;
  document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
  if(scores[activePlayer] >= 100){
      document.getElementById("name-" + activePlayer).textContent = "WINNER!!";
      document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
  }
  else{
      changePlayer();
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
