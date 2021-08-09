

// 게임 데이터
var min = 1; // 정답 최소값
var max = 100; // 정답 최대값
var secret = Math.floor(Math.random() * 100) + 1; // 실제 정답 (랜덤 숫자) ---- 주석 아주 꼼꼼히 다는 습관 들여야함. 그냥 다 적어놓으면 좋음.

//횟수 제한 변수 
var countDown = 6;


alert(`[UP & DOWN게임 1~100사이의 숫자를 맞춰보세요]`);

while (true) {

    // 사용자가 입력한 숫자
    var userAnswer = +prompt(`숫자를 입력하세요 [${min}~${max}]`);
    countDown--;

    

    // 입력값 검증
    if (secret === userAnswer) {
        alert('정답입니다.');
        break;
    }
    else if (secret > userAnswer) {
        alert('UP');
        min = userAnswer;
    }
    else {
        alert('DOWN');
        max = userAnswer;
    }
    
    if(countDown === 0) {
        alert(`졌어 정답은 ${secret}이야`);
        break;
    }
    else {
        alert (`${countDown}번의 기회가 남았습니다.`)
    }
}