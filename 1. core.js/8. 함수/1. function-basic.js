
// 원의 넓이 pi * r ** 2

//반지름이 5인 원의 넓이

var pi = 3.14159265;

var circle1 = pi * 5 ** 2;


// 반지름이 10인 원의 넓이

var circle2 = pi * 10 ** 2;

// 반지름 20인 원의 넓이

var circle3 = pi * 20 ** 2;

//반지름 100인 원의 넓이
var circle4 = pi * 100 ** 2;

// 반지름 빼고 식이 다 똑같음.

console.log('--------------원의 넓이 구하는 함수 정의하기----------------');
// => ----------- 원의 넓이를 구하는 함수 정의 -------------

// 함수는 정의만 하면 실행되지 않고, 반드시 호출해서 실행시킴.
function calcAreaCircle(r) {
    console.log('원의 넓이를 구해볼까요');  //-> 안나옴.에러남.
    var pi = 3.14159265;
    var area = pi * r ** 2;
    return area;
}

//------- 함수 호출 (정의된 함수를 사용) --------
// calcAreaCircle(10); // 호출 하고 실행하니까 위에 console.log('원의 넓이를 구해볼까요'); 나옴.

var area1 = calcAreaCircle(10);

console.log(`area1: ${area1}`);

// 두번째 호출

var area2 = calcAreaCircle(20);
console.log(`area2: ${area2}`);  // 호출 할때마다 함수 전체가 한번씩 돎.


////////////////////////////////////////////////////////////
console.log('============1~x까지의 누적합 함수로 정의하기================');

// 1~10까지의 누적 총합이 필요함.

var total = 0;
for (var n = 1; n <= 10; n++){
    total += n;
}

// 다른거 막 하다가, 1~50까지의 누적합을 구할 필요가 생김.
total = 0;
for (var n = 1; n <= 50; n++){
    total += n;
}

// 또 다른거 막 하다가, 1~100까지 누적합을 구할 필요가 생김.
total = 0;
for (var n = 1; n <= 100; n++){
    total += n;
}

// -> 불편함 (코드가 계속 중복됨.) 조건식 n값 빼고 식이 다 똑같음.
// 함수 정의 : 1~x까지의 누적합.
function calculateTotal(x) {
    var total = 0;
    for (var n = 1; n <= x; n++){
        total += n;
    }
    return total;
}

var total1 = calculateTotal(10);
console.log(`total1: ${total1}`);

var total2 = calculateTotal(100);
console.log(`total2: ${total2}`);

console.log('=====================================');
////////////////////////////////////////////////////////

function add(n1, n2) {
    return n1 + n2;
}

console.log(add(10, 20));


console.log('------함수 정의 방법2 : 함수 리터럴 사용-----');
// 함수 정의 2) 함수 리터럴 사용
// 함수를 값으로 하여, 변수에 저장. 

var sub = function(n1, n2) {
    return n1 - n2;
};

console.log(sub(20, 10));
