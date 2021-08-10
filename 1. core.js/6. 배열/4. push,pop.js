var pets = ['멍멍이', '야옹이', '짹짹이']
console.log(pets);

// 동물 추가하고 싶음. => push

// <push() : 배열의 맨 끝에 요소를 추가.>
pets.push('어흥이');
pets.push('징징이');
console.log(pets);

console.log('-----------------------------------');
// <pop() : 배열의 맨 끝 요소를 제거>

// pets.pop();
// console.log(pets);   // 징징이 사라짐.

var lastItem = pets.pop();       // 이렇게 따로 저장해놓을 수 있음.
console.log(`lastItem: ${lastItem}`); 

console.log('-----------------------------------');
// <shift() : 배열의 맨 첫번째 요소를 제거>

// pets.shift();
// console.log(pets); // 멍멍이 사라짐

var firstItem = pets.shift();     // 이렇게 따로 저장해놓을 수 있음.
console.log(`firstItem: ${firstItem}`);


console.log('-----------------------------------');
// <unshift() : 배열의 맨첫번째 위치에 요소를 추가>
pets.unshift('갈갈이')
console.log(pets);

