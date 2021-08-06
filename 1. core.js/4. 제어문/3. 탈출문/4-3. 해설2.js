
// 정답횟수와 오답횟수를 누적할 변수 선언 -> 얘는 반복되면 안됨. 반복문 밖에 해놔야함.
var correctCount = 0, wrongCount = 0;


while(true){

    //1~50 사이 랜덤정수 2개

    var first =  Math.floor(Math.random()* 50) + 1;

    var second = Math.floor(Math.random()* 50) + 1;

   // 랜덤 연산자 생성을 위한 3가지 랜덤 정수
   var operatorNum = Math.floor(Math.random()* 3);
   
   var mark = '';
   // 실제 정답
   var realAnswer = first + second;
   if (operatorNum === 0) {
       mark = '+';
       realAnswer = first + second;
   }
   else if (operatorNum === 1) {
       if (fist === second) {     // -> 빼기인데 두 수가 같을 경우, 0으로 답하면 게임 끝나서, 이거 적어서 조작해준거. 둘이 숫자가 같으면 앞에 숫자를 하나 올려서, 문제 자체를 바꿔버린것. (예:18-18 나오면, 19-18로 문제가 바껴서 나옴.)
           first++;
       }
       mark = '-';
       realAnswer = first - second;
   }
   else {
       mark = 'x';
       realAnswer = first * second;
   }

    // 사용자 입력값
    var userAnswer = +prompt(`${first} ${mark} ${second} = ??`)

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

