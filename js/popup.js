
$(document).ready(function () {

    $(".check_btn").click(function () {
        $(".popup").css({"display":"none"});
    });

    $("#portfolio_include").load("portfolio.html");
    
});

let target = document.querySelector("#dynamic");

function randomString(){
let stringArr = ["끝없는 도전과 배움 그끝에 보이는 나의 작품을 보며 자신의 실패를 딛고 성장하는 웹 퍼블리셔 전혜림 입니다."]
let selectString = stringArr[0];
let selectStringArr = selectString.split("");
return selectStringArr;
}

function dynamic(randomArr){
    if(randomArr.length > 0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        }, 100);
    }else{
        setTimeout(resetTyping, 3000);
    }
}
dynamic(randomString());


function resetTyping(){
    target.textContent = "";
    dynamic(randomString());
}