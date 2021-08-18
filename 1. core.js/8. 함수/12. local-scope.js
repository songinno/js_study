
function outer(x) {              // 이 x는 매개변수 : 지역 스코프
    var y = 'outer local y'
    console.log(x);
    console.log(y);
}

var x = 'global x';  // 이 x는 전역스코프

outer('outer param x');  // => outer param x 가 나옴. (그리고 사라짐)

console.log(x); // global x 나옴. 

