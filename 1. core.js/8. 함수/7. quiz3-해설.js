/*
1. 키(cm)와 몸무게(kg)을 인수로 전달받아 
2. bmi지수를 계산하여 반환함과 동시에 
3. bmi가 25.0이상이면 "당신은 과체중입니다." 
   18.5이하면 "당신은 저체중입니다." 
   나머지는 "당신은 정상체중입니다."를 출력하는 
   CalcBMI라는 함수를 정의하고 호출하세요. 
# bmi 계산식 : 몸무게(kg) / (키(m) * 키(m)) 
# 출력 예시: 
"키 -> 178.4cm, 체중-> 78.2kg의 체질량지수는: 24.57입니다"
*/

function calcBMI(height, weight) {

   var m = height / 100;  // 단위 다름 -> / 100
   var kg = weight;
   // bmi 공식
   var bmi = kg / (m * m);

   if (bmi >= 25.0) console.log('당신은 과체중입니다.');
   else if (bmi <= 18.5) console.log('당신은 저체중입니다.');
   else console.log('당신은 정상체중입니다.');

   // return round (bmi, 3);  // 이렇게 한방에 가거나 (1)

   var prettier = round(bmi, 2);  // 이렇게 한번 거쳐서 가거나 (2)
   return prettier;

}

function round(number, pos) { // 원하는 자릿수만큼 반올림해주는 함수.
   return Math.round(number * 10 ** pos) / 10 ** pos;
}


var h = 178.4, w = 78.2;
var myBmi = calcBMI(h, w);
console.log(`키 -> ${h}cm, 체중 -> ${w}kg의 체질량지수는 ${myBmi}입니다.`);

