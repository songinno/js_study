
//매개 변수 몇개까지 가능할까

// 2개의 정수의 합을 구하는 함수

function add2(n1, n2) {
    return n1 + n2;
}

//이 상태에서 숫자 3개를 더하고싶음.

//1) 중첩
var result123 = add2(add2(10, 20), 30); // 안쪽 add2가 먼저 호출, 그리고 바깥 add2 호출. =  add2(30,30)
console.log(result123);
//이걸로 4,5,6개 더할때는 복잡함.

//2) 새로 만듦.
function add3(n1, n2, n3) {
    return n1 + n2 + n3;
}
//이것도 매개변수 늘수록 귀찮아짐.

//3) n개의 정수의 합을 만드는 함수. (배열)

function addAll(nums) {
    var total = 0;
    for (var n of nums) {
        total += n;
    }
    return total;
}

// addAll([10, 20]);

var result1 = addAll([10, 20]);
console.log(result1);

/////////////////////////////////////
function addAll2(...nums) {   //...붙이면 자동으로 배열로 인식.
    var total = 0;
    for (var n of nums) {
        total += n;
    }
    return total;
}

var result2 = addAll2(10, 20, 30);
console.log(result2);