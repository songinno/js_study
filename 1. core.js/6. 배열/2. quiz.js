/*
    # scores라는 이름을 가진 배열 변수가 있습니다.
      여기에는 학생들의 수학점수가 8개 저장됩니다.
      점수는 임의로 설정하세요.
    - 요구사항:
    1. 배열에 저장된 학생들의 수학점수의 총점과 평균을 구해서
       콘솔에 출력하세요.
    2. 학생들의 점수가 추가되었을 때 코드를 건드리지 않아도 자동으로
       총점, 평균이 갱신되어야 합니다.
*/

var scores = [98, 32, 66, 87, 49, 12, 100, 99, 66];

var total = 0;



for (var i = 0; i < scores.length; i++) {

    total += scores[i];
}
console.log(`총점:${total}`);

var average = total/scores.length;

// 소수점 2째자리까지 나오게 반올림 시키기.
// var prettierAvg = Math.round(average * 100) / 100;
var prettierAvg = Math.round(average * 10 **2) / 10 ** 2;

console.log(`평균: ${prettierAvg}`); // 평균 67.66666666 이렇게 되어있음. 반올림 하고싶음.

// Math.round 하면 68이 됨. 소수점 첫째 자리에서 반올림함.
/*- 나는 67.67로 만들고 싶음. 곱하기 100을 함. 6766.666666 이거를 Math.round하면 6767이 됨. 이걸 나누기 100하면 67.67이 됨.*/
console.log("=========================================");
// 총점 <for~of>로 바꿔보기.

var scores = [98, 32, 66, 87, 49, 12, 100, 99, 66];
var total = 0;
for (var s of scores) {
  total += s;
}
console.log(total);

