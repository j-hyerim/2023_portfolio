// var AudioContext;
// var audioContext;

// window.onload = function() {
//     navigator.mediaDevices.getUserMedia({ audio: true }).then(() => {
//         AudioContext = window.AudioContext || window.webkitAudioContext;
//         audioContext = new AudioContext();
//     }).catch(e => {
//         console.error(`Audio permissions denied: ${e}`);
//     });
// }
document.querySelector("#colortile").addEventListener("click", function () {
  var audio1 = new Audio("song.mp3");
  audio1.loop = false; // 반복재생하지 않음
  audio1.volume = 0.5; // 음량 설정
  audio1.play(); // sound1.mp3 재생
});
document.querySelector("#html >img").addEventListener("mouseover", function () {
  var audio01 = new Audio("m1.mp3");
  audio01.loop = false; // 반복재생하지 않음
  audio01.volume = 0.5; // 음량 설정
  audio01.play(); // sound1.mp3 재생
});
document.querySelector("#css >img").addEventListener("mouseover", function () {
  var audio02 = new Audio("m2.mp3");
  audio02.loop = false; // 반복재생하지 않음
  audio02.volume = 0.5; // 음량 설정
  audio02.play(); // sound1.mp3 재생
});
document.querySelector("#js >img").addEventListener("mouseover", function () {
  var audio03 = new Audio("m3.mp3");
  audio03.loop = false; // 반복재생하지 않음
  audio03.volume = 0.5; // 음량 설정
  audio03.play(); // sound1.mp3 재생
});
document.querySelector("#react >img").addEventListener("mouseover", function () {
  var audio04 = new Audio("m4.mp3");
  audio04.loop = false; // 반복재생하지 않음
  audio04.volume = 0.5; // 음량 설정
  audio04.play(); // sound1.mp3 재생
});
document.querySelector("#photo >img").addEventListener("mouseover", function () {
  var audio05 = new Audio("m5.mp3");
  audio05.loop = false; // 반복재생하지 않음
  audio05.volume = 0.5; // 음량 설정
  audio05.play(); // sound1.mp3 재생
});

$(document).ready(function () {

  $(".skilltree>img").hover(function () {
      $(this).css({ "transition": "  all 0.4s" });
      $(this).css({ "transform": " scale(1.1)" });
      $(this).css({ "transform": " rotate(-20deg)" });
    } ,function () {
      $(this).css({ "transform": " scale(1)" });
    });


});
    