// 배열의 index (0,1,2,3,~) 대신 key (name, age, address 이렇게) 
// 순서 중요하지 않은 데이터들을 모아놓는것.

var user = {
    kim1234:'kkk1234',
    lee4567:'lll4567',
    park9876:'ppp9876'
};

var id = [];

for (var a in user) {
    id = user[a];
}

console.log(id);