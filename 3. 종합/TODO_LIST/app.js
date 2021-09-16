
// =====================전역변수===========================//

const todos = [         // db랑 소통하는 데이터임. (도메인)
    {
        id: 1,
        text: "할 일1",
        done: false
    },
    {
        id: 2,
        text: "할 일2",
        done: false
    },
    {
        id: 3,
        text: "할 일3",
        done: false
    }
];









// =====================함수 정의부===========================//

// *추가될 새로운 할 일의 아이디를 생성하는 함수
function makeNewId() {
    
    if (todos.length <= 0) { // 기존 할 일이 하나도 없는 상태.
        return 1;
    }
    else {
        //맨 마지막 할일의 id +1을 리턴
        return todos[todos.length-1].id + 1; // 문제 : 할일이 하나도 없을때는 에러남. 그래서 if문으로
    }
    
}

// *새로운 할 일을 화면에 렌더링하는 함수
function renderNewTodo(newTodo){
    //li 만들기 <li data-id="1" class="todo-list-item">
    const $newLi = document.createElement('li');
    $newLi.classList.add('todo-list-item');
    $newLi.dataset.id = newTodo.id; //id 정보를 newTodo가 알고잇음. newTodo 써야해서 ()안에 newTOdo 넣음. -> renderNewTodo(newTodo); -> renderNewTodo(newTodo)

    //li 밑에 것들 만들기
    $newLi.innerHTML = `
    <label class="checkbox">
        <input type="checkbox">
        <span class="text">${newTodo.text}</span>
    </label>
    <div class="modify">
        <span class="lnr lnr-undo"></span>
    </div>
    <div class="remove">
        <span class="lnr lnr-cross-circle"></span>
    </div>
    `;

    const $toDoList = document.querySelector('.todo-list');
    $toDoList.appendChild($newLi);


}; 


// *할 일 추가 기능 처리
function insertTOdoData() {
    //1. 데이터 처리
    const $todoText = document.getElementById('todo-text');
    const newTodo = {
        id: makeNewId(), // 맨 마지막 데이터의 id +1

        text: $todoText.value, //-> input의 value

        done: false
    };
    //console.log(newTodo); //확인
    todos.push(newTodo);
    //console.log(todos); // 확인

    //2. 화면에 데이터 렌더링
    renderNewTodo(newTodo); 

    //3. input 텍스트 제거 (할일 추가 후에)
    $todoText.value = '';
}

// data-id값으로 배열을 탐색하여 인덱스를 리턴
function findeIndexById(dataId) {
    for (let i=0; i < todos.length; i++){
        if (todos[i].id === dataId) {
            return i;
        }
    }
    return null; // 못찾았으면 null값 리턴. (-1로 해도 되고.)
}

// 할 일 완료 변화 처리
function changeCheckState($label) {
    /*
        1. css 변동: 체크가 된 label 태그를 찾아 checked 클래스 추가.
        (main.css 91번)
        2. 이벤트가 발생한 그 label을 찾아서 처리하려면, 이벤트 타겟 정보가 필요함.
        3. 이벤트 타겟 정보는 이 함수를 호출한 핸들러가 알고 있음.
    */
   $label.classList.toggle('checked');

    /*
        4. 문제상황 : css만 변하고, 실제 데이터(done) 변동이 없음.
        5. todos 배열의 해당 객체에 접근해서 done값을 변동시켜야 함.
        6. 만약, 현재 상황에서 2번째 체크박스를 눌렀으면, todos배열의 1번 인덱스에 접근하여 해당 done의 값을 반대로 수정.
        7. 인덱스에 접근하려면, id 정보가 필요. checkbox 근처에 (li에) data-id로 설계되어있음.
    */

    const dataId = +$label.parentNode.dataset.id; // 문자로 되어있어서 숫자로 변환 + .
    //console.log(dataId);

    /*
        8. id값을 기반으로 배열을 탐색하여, data-id와 일치하는 id프로퍼티를 가진 객체가 몇번째에 있었는지를 체크.
    */
    const idx = findeIndexById(dataId);
    //console.log(`idx: ${idx}`);

    /*
        9.찾은 인덱스로 배여에 해당객체에 접근하여 done을 수정.
    */
    if (idx !== null) {
        todos[idx].done = !todos[idx].done;
    }
    //console.log(todos);
}
// *할 일 삭제 처리 함수
function removeToDoData($li){
    //1. 화면처리 :ul에서 삭제대상 li를 제거
    const $ul = document.querySelector('.todo-list');
    console.log($li);
    $ul.removeChild($li);
    //2. 배열데이터 삭제처리 (splice) , findeIndexById 재활용
    const delIdx = findeIndexById(+$li.dataset.id);
    todos.splice(delIdx, 1);
    //console.log(todos);
}

// 수정모드 진입처리
function enterModifyMode($modSpan){

    //버튼 모양 교체 (클레스 교체: lnr-undo 에서 lnr-checkmark-circle, replace 이용)
    //클릭된 스팬 필요
    $modSpan.classList.replace('lnr-undo','lnr-checkmark-circle');

    //텍스트 span을 input:text로 교체

    //span찾기
    const $textSpan = $modSpan.parentNode.previousElementSibling.lastElementChild; //부모한테 가서, 부모의 이전 형제중 막내를 찾음.
    //console.log($textSpan);

    //input태그 만들기
    const $modInput = document.createElement('input');
    $modInput.setAttribute('type', 'text');
    $modInput.setAttribute('value', $textSpan.textContent); // 원래 써있던거 버튼 눌러도 우선 나오게 두기.
    $modInput.classList.add('modify-input');

    //태그 교체
    const $newLabel = $textSpan.parentNode;
    $newLabel.replaceChild($modInput, $textSpan);
}
// 할 일 수정 완료 처리
function modifyToDoData($modSpan2){

    //1. 버튼 모양을 원래대로 되돌림
    $modSpan2.classList.replace('lnr-checkmark-circle','lnr-undo');
    //2. input:text를 다시 span으로 교체
    //input찾기
    const $label = $modSpan2.parentNode.previousElementSibling;
    console.log($label);
    const $modInput2 = $label.lastElementChild;

    //span 태그 만들기
    const $newSpan = document.createElement('span');
    $newSpan.classList.add('text');
    $newSpan.textContent = $modInput2.value;

    $label.replaceChild($newSpan, $modInput2);

    //3. 배열 데이터도 수정. (indeIndexById 이용)
    const idx = findeIndexById(+$label.parentNode.dataset.id);

    todos[idx].text = $newSpan.textContent;    
}

// *할 일 추가시 입력값 검증
function isValidate() {
    const $todoText = document.getElementById('todo-text');

    if ($todoText.value.trim() !== '') { // 글자를 썼으면
        //trim : 공백제거를 이용해서 spacebar 막을 수 있음.
        $todoText.style.background = '';
        $todoText.setAttribute('placeholder', '할 일을 입력하세요.');
        
        return true;
    }
    else { // 아무것도 안썼으면
        $todoText.style.background = 'orangered';
        $todoText.setAttribute('placeholder', '필수입력사항입니다.');
        $todoText.value = '';
        return false;
    }
}



// =====================메인 실행부===========================//
// 즉시실행함수

(function() {
    // *할 일 추가 이벤트 만들기 : click 이벤트
    const $addBtn = document.getElementById('add');
    $addBtn.addEventListener('click', e => {
        e.preventDefault();
        //console.log("애드버턴 클릭되나 확인해보기"); 
        // ->깜빡깜빡거림 (from의 기본 전송기능 때문에.)->e.preventDefault(); 이걸로 막아버리기
        if (isValidate()) {
            insertTOdoData();
        }
             
    });

    // *할 일 완료(체크박스) 이벤트 : change 이벤트
    // 버블링 시키기. (ul한테 걸어서)
    const $toDoList = document.querySelector('.todo-list');
    $toDoList.addEventListener('change', e => {
        if(!e.target.matches('.checkbox input[type=checkbox]')) return; // 버블링 범위 제한하기.
        //console.log('체크박스 이벤트 발생!');

        //console.log(e.target.parentNode);
        changeCheckState(e.target.parentNode);

    });

    // * 할일 삭제 버튼 기능 추가하기 (버블링 이용)
    $toDoList.addEventListener('click', e => {
        // 제한하기
        if (!e.target.matches('.remove span')) return;
        // console.log('삭제버튼 클릭');
        // console.log(e.target);

        removeToDoData(e.target.parentNode.parentNode); // e.target => span, span의 부모의 부모가 클릭한 li
    });

    // * 할 일 수정 클릭 이벤트 
    //2단계: 누르면 수정을 할 수 있는 상태가 되고, 다시한번 눌러야 수정이 완료됨. 이벤트가 2개
    $toDoList.addEventListener('click', e => {
        if (e.target.matches('.modify .lnr-undo')) { //수정모드 진입버튼을 눌렀으면
            //console.log('수정모드진입버튼 클릭');
            enterModifyMode(e.target);
            // console.log(e.target);
            
        }
        else if (e.target.matches('.modify .lnr-checkmark-circle')) { //수정 완료 버튼을 눌렀으면
            //console.log('수정완료버튼 클릭.');
            modifyToDoData(e.target);
            // console.log(e.target);
        }
        else {    //둘 다 아닌 이상한거 눌렀으면.
            return;
        }

    });

})();