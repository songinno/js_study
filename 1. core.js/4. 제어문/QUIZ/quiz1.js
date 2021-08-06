// 반복문의 마지막값

var i = 3;

while (i) {  // 논리값 대신 숫자 3이 들어감. 숫자 0은 false, 0이 아닌 모든 정수는 true => 3 얼럿-while - 2얼럿-while - 1얼럿-while - 0(false) 끝.
    // alert(i--); // -> 3,2,1
    alert(--i); // -> 2,1,0
}
