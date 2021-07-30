
// 특정 연산의 결과를 저장하고 싶다.

// 1. 변수를 선언 (만든다), 만들때 한번만 씀.
var result;

// 2. 변수를 초기화 (값을 저장)
result = 10 + 20;  // = : assignment 대입, 우항에 있는 값을 좌항의 변수에 할당,대입하라. (****같다 라고 생각하면 안됨****)

console.log(result * 3);

// 변수를 선언만 해놓고 초기화x일때 -> undefined라 뜸.(나중에 검토할때 써먹을 수 있음.)
var haha;
console.log(haha);

// 변수 선언과 함께 초기화 동시에 가능함.
var total = result + 3;
console.log(total);

// 변수의 재할당 : 값을 바꾸고 싶을 때 (var 붙이는거x)
total = result * 3;
console.log(total);

// 
// result = kim + park; ->이런건 안됨. 변수를 선언 해주고 써야함.

// 변수의 값 복사 ->둘 다 90. 둘 다 쓸 수 있음.
var copyTotal = total;
console.log(copyTotal);

// 코드는 위에서 아래로 순서대로 흐름.(역주행x) -> total은 100, copyTotal은 90
total = total + 10;
console.log(total);
console.log(copyTotal);


