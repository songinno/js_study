
// 1. 중복 선언 허용x

let x = 3;

//let x = 5;

//console.log(x); // -> SyntaxError: Identifier 'x' has already been declared

console.log('---------------------------');

// 2. 블록레벨 스코프 지원

let y = 10;
if (true) {
    let y = 20;
    console.log(`if-y:${y}`);  // var : 20, let : 20
}
console.log(`global-y:${y}`);  // var : 20, let : 10


console.log('--------------------------');
// 3. 변수 호이스팅을 일으키지 않음.

z = 100;
console.log(z);  // 여기까진 100으로 나오긴 함.

//let z; // ReferenceError: Cannot access 'z' before initialization