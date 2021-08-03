
var greeting;
greeting = 'hello';
greeting = "안녕";
greeting = `잘가`;
console.log(typeof greeting); // -> 다 string이라고 나옴.문자를 만들때는 위에 3개 다 써도되는데, 자바스크립트에서는 '' 가 가장 보편적임.


var str = '그는 나에게 "안녕"이라고 말했다.'; 
//-> 둘다 쌍따옴표로 하면 에러남. 양쪽 끝 쌍따옴표는 string을 만들기 위한 약속. 안녕의 쌍따옴표는 그냥 특수기호. 이럴땐 바깥에를 다른애 ('')로 해주면 됨.
console.log(str);

var str = "LET`S GO"

console.log(str);
// 이렇게 안겹치게해주면 됨.

var str = "그는 나에게 \"안녕\"이라고 말했다."
console.log(str);
// 이렇게 특수기호 앞에 역슬래시 걸어줘도 됨. (다른 언어에서는 이거롤 씀. 근데 자바스크립트에서는 굳이 이걸로 x)
//------------------------------------

// 탈출문자
str = '나는 \t\t 홍길동 \n입니다.'
console.log(str);
// \t -> tab키,   \n -> enter키 (new line)

var filePath = 'D:\\temp\\new_icon.png';
console.log(filePath);
// 경로를 지정할때 윈도우는 역슬래쉬로 경로 지정함. 그래서 이렇게 했는데 탈출문자로 인식함.->역슬래쉬를 특수기호로 쓰고싶을 때는 앞에 역슬래쉬 또 걸어줘야함.

// ``는 왜 있을까? -> 템플릿 리터럴(ES6: 2015 대격변 이후)
var lyrics = '링딩동 링딩동 링링링리이이\n 링딩동 링딩동 링링링리이이\n 링딩동 링딩동 링링링리이이';
console.log(lyrics);
//-> 수동으로 \n으로 해서 해줘야함.

lyrics = `링딩동 링딩동 링링링리이이
링딩동 링딩동 링링링리이이
링딩동 링딩동 링링링리이이`
console.log(lyrics);
// ->****백틱으로 하면 그냥 엔터키 눌러도 문단 나눠짐.****

// 빽틱으로 8월 15일은 광복절입니다. 만들기 (값 바꿔서 다른걸로 만들기 편함. ex) 12 25 크리스마스)
var month = 8;
var day = 15;
var anni ='광복절';

console.log(month + '월 ' + day + '일은 ' + anni + '입니다.');

console.log(`${month}월 ${day}일은 ${anni}입니다.`); //-> 빽틱 사용.







