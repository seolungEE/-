/*
point = -1
time = 10
let PtBtn= document.querySelector("#point-btn");

function timecounter(){
    time -= 1;
    document.querySelector("#left-time").textContent = `남은시간 : ${time}초`
    if (time == -1){

    }
}
setInterval(timecounter, 1000);
if (time >= 0){
    PtBtn.addEventListener("click", ()=>{
        if (point == 0){
            document.querySelector("#point-btn").textContent = "클릭!"
        }
        point += 1
        document.querySelector("#point").textContent = `점수 : ${point}`;
    })
}else{
    document.querySelector("#left-time").textContent =`시간 끝!!!`
}
*/

let point = -1;
let time = 10;
let PtBtn = document.querySelector("#point-btn");

let timer; // setInterval의 ID를 저장할 변수
let a = 0;

function timecounter() {
    time -= 1;
    document.querySelector("#left-time").textContent = `남은시간 : ${time}초`;

    if (time == -1) {
        clearInterval(timer); // setInterval 중지
        document.querySelector("#left-time").textContent = "시간 끝!!!";
        PtBtn.removeEventListener("click", pointHandler); // 클릭 이벤트 제거
        let storedValues = JSON.parse(localStorage.getItem("point")) || [];
        storedValues.push(Number(point)); 
        localStorage.setItem("point", JSON.stringify(storedValues));  // 값 저장
        window.location.href = "./lb.html";
        console.log('게임끝')
        
    }
}


function pointHandler() {
    if (point == 0) {
        document.querySelector("#point-btn").textContent = "클릭!";
        timer = setInterval(timecounter, 1000); // 타이머 시작
    }
    point += 1;
    document.querySelector("#point").textContent = `점수 : ${point}`;
}





// 클릭 이벤트 추가
PtBtn.addEventListener("click", pointHandler);
document.body.style.backgroundColor = localStorage.getItem('backgroundColor');