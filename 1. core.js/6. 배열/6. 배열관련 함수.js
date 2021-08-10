

var foods = ['김말이', '닭꼬치', '어묵', '떡볶이'];

// indexOf() : 배열 요소의 인덱스를 알려줌.

var idx = foods.indexOf('떡볶이');
console.log(`찾은 인덱스: ${idx}`);     // 없는걸 찾으면 -1 이라고 뜸. 

console.log('========================');
// slice() : 배열을 잘라낸 사본을 리턴.

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var slicedArr = arr.slice(3,7);    // ()안에 인덱스 값 넣는거. 3,4,5,6 가져오고 싶으면, (3,7) (3이상 7미만)

console.log(slicedArr);

// 3,4,5,6 을 아예 뺀게 아님. 복사해서 가져온것 뿐. arr 배열은 그대로 유지.

console.log(arr);

console.log('------------------------');
arr.slice();  // -> 전체 복사. 아예 사본뜰때 사용하는거.

var copyArr = arr.slice();
copyArr[0] = 99;
console.log(copyArr);
console.log(arr);
// * 원본은 코딩할때 건들지 않는게 좋음. 사본을 이용하면 좋음.

console.log('------------------------');
// slice 괄호 안에 값을 하나만 쓰면, 그 인덱스부터 끝까지 잘라냄

console.log(arr.slice(7));

console.log('----------------------------------------');
// < reverse() : 배열을 역순으로 재배치, "원본을 변화시킴". (slice로 사본 떠서 reverse하는게 좋음.) >
arr.reverse();
console.log(arr);  // 오름차순, 내림차순 정렬시 이용.

console.log('----------------------------------------');
// < join() : 배열의 요소를 모두 꺼내어 구분문자열과 함께 연결시킴 >

var str = foods.join('랑 ');
console.log(str);

console.log('----------------------------------------');
// < concat() : 배열을 결합하여 사본을 리턴. >

var arr1 = [10, 20, 30];
var arr2 = [500, 300, 100];

var concatArr = arr1.concat(arr2); //arr1, arr2 둘이 자리 바꾸면 배열 순서도 바뀜.
console.log(concatArr);

console.log(arr1); // 원본 불변
console.log(arr2); // 원본 불변


console.log('----------------------------------------');
// < includes() : 배열에 요소가 있는지 확인해서, 논리값으로 리턴해줌(true 또는 false)

var result = foods.includes('어묵');
console.log(result);