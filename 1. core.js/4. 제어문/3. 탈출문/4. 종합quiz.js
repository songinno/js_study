

// 랜덤으로 두 수의 사칙연산이 나옴. 맞으면 맞았다하고 틀리면 틀렸다함. 0을 입력하면 문제 계속내면서 누적으로 몇번 맞았는지, 틀렸는지 나옴.

// 숫자 범위 1~50 사이 2개. 더하기로 문제 한문제 내고 맞았는지 틀렸는지 거기까지 만듦. 0을 입력할때까지.


// var q = +prompt(`${rn} + ${rn2} = ?? `)

var c1 = 0;
var c2 = 0;


while(true) {
    var rn = Math.floor(Math.random()* 50) + 1;
    
    var rn2 = Math.floor(Math.random()* 50) + 1;

    var rn3 = Math.floor(Math.random()* 3) + 1;

    if (rn3 === 1) {
        rn3 = '+'
    }
    else if (rn3 === 2) {
        rn3 = '-'
    }
    else if (rn3 === 3) {
        rn3 = 'x'
    }

    var q = +prompt(`${rn} ${rn3} ${rn2} = ?? `);

    var answer = rn + rn2;

    if (q === 0) {
        break;
    }

    else if(q === answer) {
        alert('정답입니다.');
        c1++;
    }

    else if (q !== answer) {
        alert('오답입니다.');
        c2++;
    }

}
    alert(`프로그램이 종료되었습니다. 정답: ${c1}, 오답: ${c2}`)