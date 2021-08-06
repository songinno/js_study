for (var i=1; i < 10; i++){
    if (i % 2 === 0) continue;  // skip의 의미. 건너 뛰어라.
    console.log(i);
}

console.log('------------------------------');

while (true) {
    var n = +prompt('숫자를 입력하세요');
    if (n === 0) {
        break;
    }
    else if (n === 1) {
        continue;   // continue 만나면, while로 돌아간다고 생각(다음회차의 while)
    }

    alert('메롱메롱');
}
alert('끝났지롱');