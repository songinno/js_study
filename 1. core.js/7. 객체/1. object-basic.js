
// < 객체 생성 > (생성 방법 많음. 대중적인 것으로 할것.)

var dog = {
    //프로퍼티(객체의 속성) 설정 / 프로퍼티 = key+value
    name: '뽀삐',
    kind: '진돗개',
    age: 2,
    favorite: ['산책', '개껌'],
    injection: true
};

var cat = {
    kind: '블랙러시안',
    age: 3,
    name: '콩순이',
    injection: false,
    favorite: ['낮잠', '캣타워']
};

console.log(typeof cat);
console.log('------------------------------------');

// < 객체에 저장된 값을 참조하는 방법1 > (배열에서는 index, 객체는 key를 통해)
console.log(cat.name);
console.log(dog.age);
console.log(cat.favorite);

console.log(dog.favorite[0]); // 강아지가 첫번째로 좋아하는 취미. (배열응용)

// 고양이가 3번째로 좋아하는 취미를 추가하고 싶음. (배열 응용)
cat.favorite.push('참치');
console.log(cat.favorite);

console.log('-------------------------------------------');
// < 객체에 저장된 값을 참조하는 방법2 > (문자열)
console.log(dog.injection); // 방법1

// 방법2 : 대괄호 참조. -> 반드시 key를 문자열형태로 넣어야함.
var data = 'injection';

console.log(dog[data]);
console.log(dog['injection']);   // -> 넷 다 똑같은애들.
console.log(dog["injection"]);
console.log(dog[`injection`]);

console.log('----------------------------------------------');
// < 프로퍼티 값 수정 >
dog.age = 5;
console.log(dog.age);

//뽀삐의 2번째 취미는 방어지럽히기였음. 수정하기.
dog.favorite[1] = '방어지럽히기';
console.log(dog.favorite);

console.log('-----------------------------');
// < 프로퍼티 동적 추가 (코드 실행중 추가할때) > 
// 콩순이 주인 이름을 추가해야함.

cat.master = '고길동';  // -> 없는 key를 그냥 달고 쓰면 새로 생김.
console.log(cat);

console.log('-----------------------------------------');
// <프로퍼티 동적 삭제>
delete cat.master;
console.log(cat);

