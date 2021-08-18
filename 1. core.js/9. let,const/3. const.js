

// *const => 상수 : 불변의 고정값.

const PI = 3.14159265;  // 관례 : 상수는 '대문자'로 씀. 띄어쓰기는 밑줄로

// PI = 5.5;  // -> TypeError: Assignment to constant variable.

console.log(PI);

console.log('-----------ex2)--------------');

const TAX_RATE = 0.1; // 세율 고정.

let preTaxPrice = 100;  // 세전가격

let postTaxPrice = preTaxPrice + (preTaxPrice * TAX_RATE); // 세후가격 


console.log('---------*const와 객체(배열, 객체, 함수)----------------');

// *const와 객체(배열, 객체, 함수)
const person = {
    name: '김철수',
    age: 30
};
/*
person = {
    name: '박영희',
    age: 25
};
*/

// 객체 자체는 보통 바뀌면 안됨.  이름이나 나이 이런 정보는 바뀌어도 괜찮은데, 객체라는 것은 바뀌면 안됨. const로 막아놓음.
person.name = '김바보';  // 이건 가능, 통째로 바꾸는 것만x
console.log(person);


console.log('-------------------');

// const는 초기화 안하면 에러남 (var나 let은 undefined값.)
// const a; // SyntaxError: Missing initializer in const declaration 
// => 선언과 동시에 초기화 필요o