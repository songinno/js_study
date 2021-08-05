// 2단~9단까지 쭉 나오게 하고싶음. 일일이 다 쓰기는 싫음.

/* for(var level = 2; level <=9; level++){
    for (var line=1; line <= 9; line++) {
        console.log(`${level} x ${line} = ${level*line}`);
        }
} */
console.log('----------------------------------');

/*
    level   line    level*line
    2       1       2
            2       4
            3       6
            ...    ...
            9       18
            10 ->console log
    3       1       3
            2       6
            3       9
            ...     ...
            9       27
            10 ->console log   
    ...
    9
    10->x
*/
console.log('----------------------------------');

/*for (var j = 0; j < 3; j++) {   // -> 3바퀴
    for (var i = 0; i < 5; i++) {  // ->5바퀴   => 3*5=15바퀴
        console.log('안녕' + num++);
    }
}*/

var num = 1;
for (var k = 0; k < 2; k++) { //->2바퀴
    for (var j = 0; j < 3; j++) {   // -> 3바퀴
        for (var i = 0; i < 5; i++) {  // ->5바퀴   => 30바퀴
            console.log('안녕' + num++); 
        }
        // console.log('안녕' + num++); -> 여기 있으면 6번
    }
    // console.log('안녕' + num++); -> 여기 있으면 2번.
}

// -----------------------------------------------------
console.log('------------------------------------------');
// 짝수 구구단

for (var level = 2; level <=9; level++){
    if (level % 2 === 0) {
        for (var line=1; line <= 9; line++) {
            console.log(`${level} x ${line} = ${level*line}`);
        }
    }
}