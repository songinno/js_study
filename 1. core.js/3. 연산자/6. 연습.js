// 이름을 입력하세요 -> 이름 입력, 나이를 입력하세요 -> 나이 입력 => 00님은 00년생이시군요?

var userName = prompt('당신의 이름은?');
var userAge = +prompt('당신의 나이는?');

var birthYear = 2021 - userAge + 1;
alert(`${userName}님은 ${birthYear}년생이시군요?`);
