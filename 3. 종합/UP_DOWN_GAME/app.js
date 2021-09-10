
//=========== 전역변수 선언부 ===========

// 게임에 필요한 데이터 객체

const gameDatas = {
    secret: Math.floor(Math.random()* 100), // 1~100사이의 랜덤 정수
    min: 1,
    max: 100,
    answer: null  // 사용자가 클릭한 아이콘의 숫자
};







//=========== 함수 정의부 ===========

// # 숫자 아이콘(구슬) 생성 함수
function makeIcons() {
    const $numbers = document.getElementById('numbers');

    //아이콘 n개 만들기
    for (let i=gameDatas.min; i <= gameDatas.max; i++) {
        const $div = document.createElement('div');
        $div.classList.add('icon');
        $div.textContent = i;
        $numbers.appendChild($div);

    }
};







//=========== 메인 실행부 ===========

//즉시실행함수 이용
(function() {

    // 아이콘 배치
    makeIcons();


})();

