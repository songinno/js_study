// 콜백함수는 함수 호출자가 기본기능은 만든 사람에게 맡기고, 추가 기능을 스스로 생성해서 사용하고 싶을 때 쓰는 기법.

function sayHello(callback) {
    console.log('안녕하세요~');
    callback('맛없는');
}

// sayHello(function() {
//     console.log('안녕하세요2');});


//화살표로 한줄로

sayHello((msg) => console.log(msg + '안녕하세요2'));