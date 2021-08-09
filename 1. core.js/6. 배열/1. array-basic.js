
// 과일 이름 4개를 저장해놓고 쓰고싶음.

// <배열의 생성>
// 배열 변수 이름 관례: 복수형(s), -List
var fruits = ['사과', '포도', '오렌지', '복숭아']; 

console.log('--------------------------------------');
// <배열 길이 length(개수) 확인: 배열이름.length>
console.log(`배열의 길이: ${fruits.length}`);

console.log('--------------------------------------');
// <배열 요소(element. 배열에 저장된 하나하나하나) 참조(reference. 데이터를 가져다 쓰겠다.)> => 인덱스 활용.(0번부터 3번까지 부여되어있음.)
// 마지막 데이터는 length-1번으로 기억. n번째 요소는 n-1번
console.log(`배열의 3번째 요소: ${fruits[2]}`);

var apple = fruits[0];
console.log(apple);

console.log('--------------------------------------');
// <배열 요소 수정>
// 2번째 데이터 수정하고싶음
fruits[1] = '수박';

console.log(fruits);

console.log('--------------------------------------');
// <배열 전체 요소 참조 (배열 순회(iteration))>

for (var i = 0; i < fruits.length; i++)

console.log(fruits[i] + ' 맛있다');