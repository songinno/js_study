
// 랜덤값 = '난수' 생성 
// Math.random() : 0.0 이상 1.0 미만의 실수 난수를 생성.

var rn = Math.random();
console.log(`랜덤값:${rn}`); //->실행 할때마다 다 다른값 나옴.

if (rn > 0.66) {
    console.log('오늘 저녁은 치킨');
}
else if (rn > 0.33) {
    console.log('오늘 저녁 햇반');
}
else {
    console.log('오늘 저녁 단무지');
}


console.log('-----------------------------------------------');
// 정수 만들기
// Math.floor() : 내림값, Math.ceil() : 올림, Math.round() : 반올림
console.log(Math.floor(3.789));

console.log(Math.ceil(5.221));

console.log(Math.round(7.6));


console.log('-----------------------------------------------');

/*
    # 1~10 사이의 랜덤 정수 생성.

    Math.random() => 0.0 이상 ~ 1.0 미만 실수 생성.
    Math.random() * 10 =>  0.0이상 ~ 10.0미만의 실수 생성
    Math.floor(Math.random() * 10) => 0 이상 ~ 10 미만의 정수 생성.

    Math.floor(Math.random() * 10)+1 -> 1 이상 ~ 11 미만의 정수 생성.
 */

var ri = Math.floor(Math.random() * 10) + 1;
console.log(`랜덤정수: ${ri}`);

/*  랜덤정수 만들기 공식
    -x이상 y이하의 랜덤 정수 생성법.
    Math.floor(Math.random()* (y - x + 1)) + x;
*/

console.log('-----------------------------------');

// 110~200 사이의 랜덤 정수가 나와야함.
// -> 200-110+1 = 91
//  Math.floor(Math.random()* 91) + 110;

var damage = Math.floor(Math.random() * 91) + 110;
console.log(`랜덤피해:${damage}`);