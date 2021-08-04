
var money = 5000;

// 조건연산자
var food = money >= 5000 ? '김치찌개' : (money >= 1000 ? '라면' : 굶어);

console.log(food);


// if문 사용

var food;

if (money >= 5000) {
    food = '김치찌개';
}
else if (money >= 1000) {
    food = '라면';
}
else {
    food = '굶어';
}

console.log(food);

// 둘이 똑같긴 한데, 조건들이 추가적으로 붙게되면 조건연산자는 많이 복잡해져서 if문이 더 편할듯.
// 간단한 질문이면 조건연산자가 편할지도. 상황에 맞게 판단해서 쓸 것.