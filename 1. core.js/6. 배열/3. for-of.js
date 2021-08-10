

var weekDays = ['월', '화', '수', '목', '금', '토', '일'];

// console.log(weekDays[0] + '요일'); 이거 7개

// for문
/* 
for (var i = 0; i < weekDays.length; i++){
    console.log(weekDays[i] + '요일');
} 
*/

// 배열 전체순회 반복문 for~of문
for (var day of weekDays) {
    console.log(day + '요일');
}

// weekDays 배열에서, 첫회차에 첫번째 데이터를 꺼내서 day에 넣고 저장하고 log 실행, 그다음회차에서 2번째 데이터 꺼내서 day 저장, 월에서 화로 바뀜. 그리고 로그 화, 세번째회차에 수를 day에 넣고 저장하고 로그. 반복반복반복.
//반복회차가 자연스럽게 weekDays 안에 만큼.
// 전체 순회할때 사용하면 좋음.

console.log('================');
//요일 중 홀수번째 애들만 출력하고 싶음. 이럴 때는 for~of로 불가능.
for (var i = 0; i < weekDays.length; i++){
    if (i % 2 === 0) {
        console.log(weekDays[i] + '요일');
    }
} 
console.log('============================');
// 예제2) '짜장면과 짬뽕과 볶음밥' 이라고 만들고 싶음.
var foods = ["짜장면", "짬뽕", "볶음밥"]

//완성된 연결 문자열을 저장할 변수 필요.
var result = '';

var i = 0;

for (var f of foods) {
    if (i === foods.length-1){
        result += f;
        break;
    }
    result += f + '과 ';
    i++;
}
console.log(result);