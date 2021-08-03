
var point = 30;

console.log(`점수:${point}점`);

if (point >= 60){
    console.log('시험에 합격했습니다.');
     console.log('축하합니다.');
}
// 1문장짜리는 {} 생략 가능하긴 함. 그냥 걸고 쓰면됨.

if (point < 60) {
    console.log('응 불합격');
    console.log('ㅅㄱ');
}

// if 둘이 동시에 이루어질 가능성 없음. 이럴 때는 if를 2개로x, if와 else(한 세트임)로 처리해야함.

else {
    console.log('응 불합격');
    console.log('ㅅㄱ');
}

console.log('즐거운 하루 되세요~');
// 얘는 if랑 관련없음. 그냥 무조건 나오는 코드. 구분 잘하기.