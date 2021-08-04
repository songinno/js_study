/*
- Quiz. 아래 요구사항에 맞는 코드를 작성하고 
        브라우저에서 실행하여 테스트하세요.
- 요구사항
1. 사용자는 정수 2개를 각각 입력할 수 있어야 함.
2. 프로그램은 2번째 정수를 입력하고 엔터를 누르면 1번째 정수부터    
   2번째 정수까지의 총합(2번째 정수포함)을 출력해야 함.
3. 반복문 while을 사용할 것!
ex)  정수 3 , 7 을 입력했을 시 3 + 4 + 5 + 6 + 7 의 
     총합 25를 출력해야 함!
*/

var num1 = +prompt('첫번째 정수 입력');
var num2 = +prompt('두번째 정수 입력');
var total = 0; // 누적합을 저장할애.
var copyNum1 = num1;

while (num1 <= num2) {
    total += num1;

    num1++;
}
alert(`${copyNum1}부터 ${num2}까지의 합은 ${total}입니다.`);

// 선생님꺼

// var x = +prompt('첫번째 정수 입력');
// var y = +prompt('두번째 정수 입력');

// var total = 0;
// var n = x;

// while (n <= y) {
//     total += n;
//     n++;
// }
// alert(`${x}~${y}까지의 총합 : ${total}`);