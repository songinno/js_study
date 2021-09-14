//================ 전역변수 선언부 ====================//

//게임에 필요한 데이터 객체
const gameDatas = {
    secret: Math.floor(Math.random() * 100), //1~100사이의 랜덤 정수
    min: 1,
    max: 100,
    answer: null //사용자가 클릭한 아이콘의 숫자
};


//================ 함수 정의부 ====================//

//아이콘 전체삭제 함수
function clearAllIcons() {
    const $numbers = document.getElementById('numbers');
    for (let $icon of [...$numbers.children]) {
        $numbers.removeChild($icon);
    }
}

//숫자 아이콘 생성 함수
function makeIcons() {

    const $numbers = document.getElementById('numbers');

    //아이콘 n개 만들기
    for (let i = gameDatas.min; i <= gameDatas.max; i++) {
        const $div = document.createElement('div');
        $div.classList.add('icon');
        $div.textContent = i;
        $numbers.appendChild($div);
    }
}

//UPDOWN을 검증하는 함수
function checkAnswer($target) {

    //객체 디스트럭쳐링(ES6+)
    const {
        secret,
        answer
    } = gameDatas;

    if (secret === answer) { //정답인 경우
        processCorrect($target);
    } else if (secret > answer) { //UP인 경우
        processUpDownCase(true);
    } else {                    //DOWN인 경우
        processUpDownCase(false);
    }
}

//정답인 경우 해야할 일
function processCorrect($target) {
    //1. 축하박스 나타나는 처리
    const $finish = document.getElementById('finish');
    $finish.classList.add('show');

    //2. 정답아이콘 애니메이션 처리
    $target.setAttribute('id', 'move');
}


//UPDOWN인 경우 해야할 일
function processUpDownCase(isUp) {
    
    const $up = document.getElementById('up');
    const $down = document.getElementById('down');

    const ANIMATION_CLASS_NAME = 'selected';

    if (isUp) {
        //1. UP아이콘에 class=selected 부여
        $down.classList.remove(ANIMATION_CLASS_NAME);
        $up.classList.add(ANIMATION_CLASS_NAME);

        //2. id=begin 값을 변경
        gameDatas.min = gameDatas.answer + 1;
        document.getElementById('begin').textContent = gameDatas.min;
    } else {
        //1. DOWN아이콘에 class=selected 부여
        $up.classList.remove(ANIMATION_CLASS_NAME);
        $down.classList.add(ANIMATION_CLASS_NAME);

        //2. id=end 값을 변경
        gameDatas.max = gameDatas.answer - 1;
        document.getElementById('end').textContent = gameDatas.max;
    }

    //100개를 다지우고 
    clearAllIcons();
    //아이콘 재배치 처리
    makeIcons();
}



//================ 메인 실행부 ====================//

(function () {

    //아이콘 배치
    makeIcons();

    //아이콘 클릭 이벤트 
    const $numbers = document.getElementById('numbers');

    $numbers.addEventListener('click', e => {

        //div.icon만 e.target이 되어 이벤트가 동작하도록 제한
        if (!e.target.matches('#numbers > .icon')) {
            return;
        }

        //console.log('클릭됨~~~?');
        //console.log(e.target.textContent);

        //사용자가 선택한 숫자
        gameDatas.answer = +e.target.textContent;
        //console.log(gameDatas);

        //UPDOWN 검증
        checkAnswer(e.target);
    });

})();