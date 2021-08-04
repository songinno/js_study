
// 1~10까지의 누적합.

var total

// total = 1+2+3+4+5+6+7+8+9+10;

total = 0

var n = 1;

// total += n;
// n++;
// total += n;
// n++;
// total+= n;
// n++; ->이런식으로 계속 10번 반복.

while (n <= 10) {
    total += n;
    n++;
}
console.log(total);

/* total    n
     0      1
     1      2
     3      3
     6      4
     10     5
     15     6
     21     7
     28     8
     36     9
     45     10
     55     11(False) */

     console.log('===============================');

 var x = 0;
 while (x < 10) {
    console.log('메롱~');
    x++;
}
//  서양에서 10개를 카운트 할 때, 0~10 (10은 카운트x, (<으로 생각) 나중에 배열 배울 때 이런 식으로 많이 쓰이니 알아둘 것.)
console.log('===============================');

// 1~100사이의 정수중, 8의 배수를 모두 출력해라.

var num = 1;

while (num <= 100) {
    if (num % 8 === 0){
        console.log(num);
    }
    num++;
}
console.log('==================================');
// 50~350 사이 정수중, 9의 배수이면서 18의 배수가 아닌 모든 정수를 출력.

var num2 = 50;

while (num2 <= 350) {
    if (num2 % 9 === 0 && num2 % 18 !== 0) {
        console.log(num2);
    }
    num2++;
}
console.log('==================================');

// 1~4000 사이 정수중, 11의 배수의 개수를 구하시오.

var num3 = 1;
var count = 0;
while ( num3 <= 4000) {
    if ( num3 % 11 === 0){
        count++;
    }

    num3++;
}
console.log(`11의 배수의 개수: ${count}`);
console.log(count);
console.log('==================================');
