// 중요
// undefined, null, 0, NaN, ‘’(빈문자열)은 모두 false로 판단합니다.  => *** 암기 *** (이거 빼곤 다 true)

if ('') console.log('ok1'); // 이건 빈문자열 (값 없음.)
if ("") console.log('ok1-1'); 
if (``) console.log('ok1-2'); 

if (' ') console.log('ok2'); // 이건 띄어쓰기 하나 들어감. = 공백문자열 (값이 있는거.)


if (undefined) console.log('ok3');
if (null) console.log('ok4');

if (-749) console.log('ok5');

if ([]) console.log('ok6');
if ({}) console.log('ok7');

if (NaN) console.log('ok8');

console.log('----------------------------------------');

var num = 10;
if (num % 2) { //   => if (0) -> false
    console.log('짝수입니다.');
}
else {
    console.log('홀수입니다.');
}

if (!(num % 2)) { // 0을 반전   => if (!0) -> true
    console.log('짝수입니다.');
}
else {
    console.log('홀수입니다.');
}

// 연산 우선순위(참고사항)
//단항연산자 > 2항연산자