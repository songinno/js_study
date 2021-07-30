
// 식별자 : 데이터를 구분하기 위한 고유의 이름 (변수, 함수, 클래스, ...)

// ------------유의사항-------------
// 1. 대소문자를 구분할 것.
var banana = '바나나'; //텍스트를 저장할때는 '' 안에 넣어줌
var BANANA = '빠나나';
var BaNaNa = '버네이너';
console.log(banana);
console.log(BANANA);
console.log(BaNaNa);

// 2. 숫자로 시작하거나, 숫자만으로 만들지말 것.
// var 8 = 100;
// var 78hello = 78;
var hello7 = 77;
var he77llo = 777; //끝이나 중간에 숫자는 가능.

// 3. 특수문자는 $, _ 외에 사용 금지.
// var my-addr = '대전서구'; (x)
// var hello!@# = '안녕'(x)
var $bye = '잘가'; //(O)
var my_firend = '둘리'; //(O)

// 4. 띄어쓰기는 X
// var user phone number = '010123456789'; (X)
var userphonenumber = '010123456789'; 
//붙이긴 했는데 가독성이 떨어짐.-> coding convention(관례)
var user_phone_number = 1; //snake case (파이썬, SQL 채용)
var userPhoneNumber = 1; //camel case (띄어쓰기 부분만 대문자. 자바스크립트, 자바 채용.)
var UserPhoneNumber = 1; //pascal case (클래스 같은 큰, 중요한 곳에 사용.)

// Hungarian case (몰라도됨)
var int_hello = 700; //int : 정수
var str_addr = '대전'; //str : string 문자.
// 이렇게 헝가리 사람들이 앞에 성씨를 붙이듯이, 앞에다가 문자인지 숫자인지 알려주는 그런거. 지금 아무도 안씀.

// 5. 키워드(예약어)는 식별자로 사용x
// var, if, for 등 단어 자체에 문법적 의미가 있는 것들.

// ------------------권고사항-------------------
// 식별자 이름은 구체적, 명확하며 일관되게 지을 것.
var userName ='홍길동';
var userEmail ='dvdv@naver.com';
var userGender ='남 ;'