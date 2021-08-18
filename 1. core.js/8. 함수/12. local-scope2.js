
function outer(x) {           
    var y = 'outer local y'
    console.log(x);
    console.log(y);
    

    function inner() {
        var x = 'inner local x';
        var z = 'inner local z';
        console.log(x);
        console.log(y);
        console.log(z);
    }
    inner();
}

var x = 'global x';  

outer('outer param x');  

console.log(x); 

/*
- 전역 변수를 선언한 의도는 모든 코드가 전역 변수를 참조하고 변경할
수 있는 암묵적 결합(Implicit coupling)을 허용하는 것입니다. 
- 변수의 유효 범위가 클 수록 코드의 가독성이 나빠지고 의도치 않게
상태가 변경될 수 있는 위험성도 높아집니다

=> 한 전역변수 값을 여러 함수에서 저장하면, 한 함수에서 전역변수 값을 수정하면 다른 함수들도 영향을 받을 수 있음(위험성)

=>전역변수를 없애기 위해 즉시실행 함수를 사용.
*/