

// splice() : 배열의 특정 요소 제거.
var pets = ['멍멍이', '야옹이', '짹짹이', '콩벌레'];

console.log(pets);

console.log('--------------------------');
pets.splice(1, 2); // 1번부터 시작해서 2개 지워라.

console.log(pets);

console.log('--------------------------');
pets.splice(0, 1, "찍찍이", "쭉쭉이"); // 0번부터 1개를 지우고, 그 지운 자리에 찍찍이를 넣어라

console.log(pets);

console.log('--------------------------');
pets.splice(2, 0, "소라게"); // 2번 부터 0개 지우고 (지우지 말고), 그 자리에 소라게를 넣어라 => 2번 자리에 소라게 추가
console.log(pets);

console.log('--------------------------');
pets.splice(2);  // 2번부터 끝까지 전체 삭제
console.log(pets);

console.log('--------------------------');
console.log('--------------------------');
// 너무 많이 지워서 몇개 추가
pets.push('야옹이', '징징이', '깔깔이');
console.log(pets);


//이렇게 하다보니 log 안해보고는 쭉쭉이가 인덱스 몇번인지 모르겠음. 번호는 모르고 쭉쭉이 지우기.

pets.splice(pets.indexOf('징징이'), 1);
console.log(pets);

//문제점 : 없는걸 지우라고 쓰면 이상한게 지워짐. 그래서 if문으로 해야함.

var idx = pets.indexOf('징징이2');

if (idx !== -1) {
    pets.splice(idx, 1);
}
else {
    console.log('없어 못지워.');
}
console.log(pets);