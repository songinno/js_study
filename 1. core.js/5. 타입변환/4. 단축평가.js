
// 논리 연산시, 좌항에서 판단이 나버리면 우항 볼 필요 없는것.

//<OR 연산자>

console.log('hello' || 'world'); // 둘은 문자인데 || 써서 논리 판단하는구나 라고 컴퓨터가 생각함. 
 // 좌항 truthy 

console.log(0 || '안녕');
 // 좌항 falsy

console.log('===================================');

//<AND 연산자>
console.log('Hello' && 'World');
//좌항 true면 우항을 봐야 답을 알수있으니, 우항을 선택.

console.log('' && '메롱');
//좌항 이미 false, 좌항 선택. 아무것도 안뜸.

console.log('===================================');

//<응용>
var x = 10;
// if (x > 0) console.log('x는 0보다 크다');

x > 0 && console.log('x는 0보다 크다.'); // 좌항이 true, 우항 봐야 아니까 우항을 선택.

var baseLanguage = undefined;
baseLanguage = baseLanguage || 'korean'; // 좌항이 이미 false니 우항을 선택.
console.log(baseLanguage);