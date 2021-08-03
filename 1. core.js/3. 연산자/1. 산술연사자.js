
// 나눗셈 연산
console.log(27 / 5); //js는 기본으로 나눗셈이 실수 ->5.4로 나옴.

// 나머지 연산
console.log(27 % 5); //나눗셈 나머지 구해짐.

console.log(4 % 10); // 뒤에 숫자가 더 크면, 앞에 숫자가 나머지임.

console.log(2 % 7);

console.log(0 % 10);

console.log(10 % 0); //0으로 나누기 불가 ->NaN 뜸.

// 거듭제곱
var num = 2;
console.log(num ** 3); //2의 3제곱. (ES6+ 이후) 이전에는 함수로 했음.
console.log(Math.pow(num, 3)); //ES5 (위에가 더 쉬움. 몰라도될듯?)

console.log(2 ** 2 ** 3); 
console.log(4 ** 2 ** 2);

// 단항 연산자 (증감 연산자) ++, --

var x = 3;
x++;
++x; //단독으로 쓰일때는 앞에붙이던 뒤에붙이던 똑같음.
x--;

console.log(`x:${x}`);

// 전위 연산(prefix), 후위 연산(postfix)
var a = 10;
var b = a++; //->a : 11, b : 10  뒤에 있을 때 : b한테 우선 10 주고, 나중에 자기 1 더해짐.
//var b = ++a; //->a :11, b:11   앞에 있을 때 : b한테 주기 전에 1 더해지고 (11), 그 더해진걸 b한테 줌. (11)
console.log(`a: ${a}, b: ${b}`);

b = ++a;
console.log(`a: ${a}, b: ${b}`); 

b= --a;
console.log(`a: ${a}, b: ${b}`);

b = a--;
console.log(`a: ${a}, b: ${b}`);

//quiz
/*
    아래 코드가 전부 실행 된 이후
    a, b, c, d에 할당된 값을 구하세요.
    (console.log로 확인하지 말 것!)
*/
var a = 1, b = 1;
var c = ++a; // a=2, c=2
var d = b++; // b=2, d=1

console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`);