

for (var i=0; i < 10; i++) {
    console.log(i);
    break;
}
console.log('반복문 종료');

console.log('-------------------------------------');

for (var i=0; i < 10; i++) {
    if (i === 5){
        break;
    }
    console.log(i);
}
console.log('반복문 종료');

console.log('-------------------------------------');

for (var i = 0; i < 3; i++) {
    for (var j=0; j < 2; j++) {
        console.log(`${i}, ${j}`);
    }
}


console.log('-------------------------------------');

for (var i = 0; i < 3; i++) {
    for (var j=0; j < 2; j++) {
        if (i === j) break;
        console.log(`${i}, ${j}`); 
    } //inner for
    // console.log(`${i}, ${j}`); // -> 1,1 2,2 3,3
} //outer for
// => break는 자기가 속한 블록(inner for)만 탈출함.

// console.log(`${i}, ${j}`); -> 3,2