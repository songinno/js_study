
//  (shift + \ = |)

var t = true, f = false;

// && : AND 연산
console.log(t && t); // -> t
console.log(t && f); // -> f
console.log(f && t); // -> f
console.log(f && f); // - >f
// 논리 연산을 실행하면 값이 또 논리값이 나옴.
// 왼쪽을 아이디, 오른쪽을 비번이라 생각 => 둘 다 맞아야함(둘다 t여야함.)

console.log('====================================================');
// || : or 연산
console.log(t||t);
console.log(t||f);
console.log(f||t);
console.log(f||f);
//  조건문에서 논리연산 자주 쓰임.
console.log('====================================================');
// ! : NOT 연산 ('논리반전'이라고 함)
console.log(!t);
console.log(!f);

// 언제쓰냐
// hasMoney() : 돈이 있으면 true, 없으면 false
// if(hasMoney()) -> 만약에 돈이 있다면
// if(!hasMoney()) -> 만약에 돈이 없다면

var money = 100000;
if (!money) {
    console.log('그지니까 집에 있자.');
}
else{
    console.log('쇼핑을 하자!');
}

