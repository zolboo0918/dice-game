// Тоглогчийн ээлжийг хадгалах хувьсагч, 1-р тоглогчийн 0, 2-р тоглогчийг 1 гэж тэмдэглэе
var activePlayer = 1;
//Тоглогчдын цуглуулсан оноог хадгалах оноог хадгалах хувьсагч
var scores = [0, 0];
//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах оноо
var roundScore = 0;
//Шооны аль талаараа буусныг хадгалах хувьсагч, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүй үүсгэж өгнө.
var dice = Math.ceil(Math.random() * 6);

//Програм эхлэхэд бэлтгэе
document.querySelector(".dice").style.display = "none";

document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").innerHTML = 0;

document.querySelector("#current-0").innerHTML = 0;
document.querySelector("#current-1").innerHTML = 0;
