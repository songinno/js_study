
// x~y까지의 누적합을 구하는 함수 정의
// 매개변수(parameter): 함수를 정의할 때 외부(호출부)에서 받아올 값을 저장하는 변수 

function calcRangeTotal(x, y) {
    var total = 0;
    for (var n = x; n <= y; n++){
        total += n;
    }
    return total;
}
// 그런데 x랑 y는 변수 선언을 따로 한적이 없음. 그래서 소괄호 () 여기다가 적으면 선언됨. => 매개변수 선언 (x,y)

// 호출부
//함수를 호출할 때 함수에 전달하는 값 3, 8을 "인수(argument)" 라 함. (받는 애들이 매개변수)
var result1 = calcRangeTotal(3, 8);
console.log(result1);

// 실수로 하나 썼을때
var result2 = calcRangeTotal(10); // begin에 10 들어가고, end에는 undefined (초기화 안했으니깐.) n <= end 가 false로 돼서 반복문이 안돌아서 그냥 total 0값이 나옴.
console.log(result2);

// 실수로 3개 썼을때
var result3 = calcRangeTotal(10, 20, 30);
console.log(result3);  // 별문제 없음. 근데 별로 안좋음.

console.log('-----------------------------------');

// 매개변수의 기본값 1), 2)

function sayHello(language='한국어') {   // 2)

    // 1)E5
    // language = language || '한국어';

    if (language === '한국어') {
        console.log('안녕하세요~');
    }
    else if (language === '영어') {
        console.log('hello~');
    }
    else if (language === '중국어') {
        console.log('따쟈하오~');
    }
}

sayHello(); // 아무것도 안적었는데 '안녕하세요' 뜸.

// 1) 설명:  language 변수 값 초기화x -> undefined || 한국어 =>(undefined값은 falsy한 값) false || 한국어 => 한국어 선택.
// 2) function sayHello(language='한국어')

// 2) 응용
/*
calcRangeTotal(x=1, y=10) 이렇게 해놓으면
var result = calcRangeTotal();  => 아무것도 안쓰면 기본으로 1~10까지 누적합을 구함.
var result = calcRangeTotal(5); => 5~10까지의 누적합 구함.
*/

console.log('----------------매개변수가 없는 함수-------------');

function selectRandomPet() {
    var pets = ['멍멍이', '야옹이', '짹짹이', '어흥이', '꾹꾹이'];
    var rn = Math.floor(Math.random() * pets.length); // y-x+1 = 5 = pets.length
    return pets[rn]; 
}

console.log(selectRandomPet()); 

















///////////////////////////////////////////////////////////////////
/* 매개변수 이름 지을때도 잘 짓는게 좋음. 바로 알아볼 수 있도록. 
 x,y 대신 begin, end으로 바꿔주면 좋음.*/

//  function calcRangeTotal(begin, end) {
//     var total = 0;
//     for (var n = begin; n <= end; n++){
//         total += n;
//     }
//     return total;
// }
///////////////////////////////////////////////////////////////////