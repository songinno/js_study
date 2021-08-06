
// 정답횟수와 오답횟수를 누적할 변수 선언 -> 얘는 반복되면 안됨. 반복문 밖에 해놔야함.
var correctCount = 0, wrongCount = 0;


while(true){

    //1~50 사이 랜덤정수 2개

    var first =  Math.floor(Math.random()* 50) + 1;

    var second = Math.floor(Math.random()* 50) + 1;

    // 실제 정답
    var realAnswer = first + second;

    // 사용자 입력값
    var userAnswer = +prompt(`${first} + ${second} = ??`)

    // 종료조건
    if (userAnswer === 0) break;

    // 정답검증

    if (realAnswer === userAnswer) {
        alert('정답입니다.')
        correctCount++;
    }
    else {
        alert('오답입니다.')
        wrongCount++;
    }

} //end while

alert(`정답 횟수: ${correctCount}회, 틀린 횟수: ${wrongCount}회`)

