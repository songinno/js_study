
function foo() {
    var y = 3;
    return y;
}

// 1) console.log(y);   // -> ReferenceError: y is not defined

/*
foo();
console.log(y);    -> 에러
*/
var y = foo();
console.log(y);

console.log('-----------------------------');

// 함수 밖에서 선언된 변수는 전역 변수.
var z = 'global z';

function bar() {
    // 함수 내부에서 선언된 모든 변수는 지역 변수
    // 지역변수는 함수 호출이 종료되면 메모리에서 자동 삭제됨.
    var z = 'local z';
    console.log(`함수 내부z: ${z}`);  // local z나옴.  - 지역변수와 동일한 이름의 전역변수 존재시, 지역변수를 우선 참조. 함수 내부에 var z = 'local z'; 가 없으면, global z가 나옴.
}

bar();  // 호출 끝나서 지역변수 삭제됨.

console.log(`z:${z}`);  // global z 나옴.