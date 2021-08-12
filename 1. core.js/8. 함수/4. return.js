
function bar() {
    var temp = 'ddd';
    console.log(temp); // 함수 안에서는 쓸 수 있음.
    return temp;
}

// console.log(temp);  // 함수 안에 있는 변수를 밖에서는 못씀. 쓸려면 return을 해주고 bar를 호출해야함.

var t = bar();
console.log(t);

console.log('-----------------------------------');

function add(n1,n2) {
    return n1 + n2;
    console.log('hello');  // -> 써봤자 의미 없음. break처럼. 밑에 다 쓰레기.
}

for (;;) {    // for (;;) = while (true : 무한루프임. 근데 잘 안씀.)
    break;
}

function foo() {
    var n = 0;
    while(true) {
        n++;
        if (n === 5) break;  // 여기서는 break 대신 return을 써도 됨(while 밑에 더 없을때). 함수를 끝내는 거니까.
    }
    // console.log('안녕'); // -> 이거 있을 때는 break 써야됨. return 쓰면 안녕 안나옴. 함수 그냥 끝나버림.
}

console.log('-----------return이 없는 함수-------------------');

function sing() {
    var lyrics = `Ring Ding Dong Ring Ding Dong
    Ring Diggi Ding Diggi Ding Ding Ding
    Ring Ding Dong Ring Ding Dong
    Ring Diggi Ding Diggi Ding Ding Ding`;
    console.log(lyrics);
}

sing();
// -> return의 의미 

function add(n1,n2) {
    return n1 + n2;  //return 있음
}

function multi (n1, n2) {
    console.log(`${n1} x ${n2} = ${n1*n2}`); // return 없음.
}

var result = add(10, 20);   // -> 두 숫자를 더해서 갖고 오세요. 30이 필요해서. 어디다 써먹을일이 있어서.
console.log(result);

var result2 = multi(5,7);
console.log(result2);  // return 값이 없는 함수는 아무것도 반환x, 따라서 변수에 저장x, 다른 함수의 인수로 사용x console.log도 리턴이 없는 애. 단독호출용.

console.log('====================================');

// 함수의 리턴값은 항상 1개다.
// 그런데, 2개의 정수를 전달받아서 덧셈, 뺄셈, 곱셈, 나눗셈의 결과를 다 리턴받고 싶음. -> 배열이나 객체에 담아서.

function operateAll(n1, n2) {
    /* 객체로 표현
    var results = {
        plus: n1 + n2,
        minus: n1 - n2,
        multi: n1 * n2,
        divide: n1 / n2
    };
    */
    var results = [n1 + n2, n1 - n2, n1 * n2, n1 / n2];  // 배열로도 표현 가능.
    return results;
}

var operDatas = operateAll(10, 5);
// console.log(operDatas);
// console.log(`덧셈: ${operDatas.plus}`);
// console.log(`뺄셈: ${operDatas.minus}`);
// console.log(`곱셈: ${operDatas.multi}`);
// console.log(`나눗셈: ${operDatas.divide}`);

var operDatas = operateAll(10, 5);
console.log(`덧셈: ${operDatas[0]}`);