
// 1~n까지 숫자 출력

function showNumbers(n) {
    for (var i = 1; i <= n; i++){
        if (true) {
            console.log(i);
        }
    }

}

showNumbers(5);

// 추가로, 정수 하나를 전달하면, 1 ~ 정수까지의 짝수만 출력하고싶음

function showEvenNumbers(n) {
    for (var i = 1; i <= n; i++){
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
showEvenNumbers(10);

// 추가로, 정수 하나를 전달하면, 1 ~ 정수까지의 홀수만 출력하고싶음

function showOddNumbers(n) {
    for (var i = 1; i <= n; i++){
        if (i % 2 === 1) {
            console.log(i);
        }
    }
}
showOddNumbers(10);
// 보니까 if 조건문만 다름. 나머지 똑같음. 코드를 전달했으면 좋겠음. 함수로 전달.


// **콜백 함수 : 매개변수에 함수 리터럴을 넣어버림.
console.log('------------콜백함수---------');

function showNumbers2(n, code) {
    for (var i = 1; i <= n; i++){
        if (code(i)) {
            console.log(i);
        }
    }
}

// showNumbers(10, function(n) { 
//     return n % 2 === 0
// });

showNumbers2(10, n => n % 2 === 0);  // 위에를 한줄로.

