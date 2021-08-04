
var age = 5;

if (age >= 20) {
    console.log('성인입니다.');
}
else if (age >= 17) {
    console.log('고등학생입니다.');
}
else if (age >= 14) {
    console.log('중학생입니다.');
}
else if (age >= 8) {
    console.log('초등학생입니다.');
}
else {
    console.log('미취학 아동입니다.');
}

// 주의사항1) else if 말고 그냥 if라고 하면 안되나? -> if는 하나의 if당 하나의 팀이 됨.
// 다 if로 하면, 각각의 if들이 4팀(if,if,if,if+else)으로 쪼개져서, 각각의 값이 나옴.

//주의사항2) 윗 조건이 아래 조건을 먹어버리면 안됨. 위에서 아래로 순차적으로 검사를 해서, 처음에 true 뜨면 더이상 밑으로 검사 x
//ex) age 12 17 14 8

// 주의사항3) else는 조건식 쓰는거x (+ else는 꼭 안써도 됨.)


