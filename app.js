// Тоглогчийн ээлжийг хадгалах хувьсагч, 1-р тоглогчийн 0, 2-р тоглогчийг 1 гэж тэмдэглэе
var activePlayer = 1;
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

document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.ceil(Math.random() * 6);
  dice.style.display = "block";
  dice.src = "dice-" + diceNumber + ".png";
});
