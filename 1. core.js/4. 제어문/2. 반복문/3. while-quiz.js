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
// <내가한거>
// var num1 = +prompt('첫번째 정수 입력');
// var num2 = +prompt('두번째 정수 입력');
// var total = 0; // 누적합을 저장할애.

// while (num1 <= num2) {
//     total += num1;

//     num1++;
// }
// alert(`${num1}부터 ${num2}까지의 합은 ${total}입니다.`);

// -> 이렇게 하면, 1~10합 구하려고 입력하면 11부터 10까지의 합은 55입니다. 라고 나옴. num1++때문에 11까지 카운트 되어서 그게 값이 출력됨.
// 그래서 선생님꺼 보면, var n 으로 x의 값을 제어해준거임.

// 
// <내가한거 수정2> 이렇게 하면 제대로 나옴. (num1 을 Num1로 제어)

// var num1 = +prompt('첫번째 정수 입력');
// var num2 = +prompt('두번째 정수 입력');
// var total = 0; // 누적합을 저장할애.

// var Num1 = num1;

// while (num1 <= num2) {
//     total += num1;

//     num1++;
// }
// alert(`${Num1}부터 ${num2}까지의 합은 ${total}입니다.`);

// ****for로 해보기 ****
var num1 = +prompt('첫번째 정수 입력');
var num2 = +prompt('두번째 정수 입력');
var total = 0; // 누적합을 저장할애.

var Num1 = num1;

for(var num1; num1 <= num2; num1++) {
    total += num1;
}
alert(`${Num1}부터 ${num2}까지의 합은 ${total}입니다.`);




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
