// 인터페이스
interface User {
  name: string;
  age: number;
}

// 변수에 사용하는 경우
const seho: User = { name: 'hi', age: 100 };

// 함수의 매개변수에 사용하는 경우
function getUser(user: User) {
  console.log(user);
}
getUser(seho);

//함수의 스펙(구조)에 인터페이스 활용
interface SumFunction {
  (a: number, b: number): number;
}
let sumFunc: SumFunction;
sumFunc = function (num1: number, num2: number): number {
  return num1 + num2;
};

// 배열의 인덱싱에 사용하는 경우
interface StringArray {
  [index: number]: string;
}
let arr: StringArray;
arr[0] = 'hi';
// arr[1] = 10; //Type 'number' is not assignable to type 'string'

interface ObjectArray {
  [index: number]: object
}
let arr2: ObjectArray;
arr2[0] = {
  name: "paul",
  age: 20
}


// 딕셔너리 패턴

//객체 접근 방식인 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp
}

let obj: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
  tsFile: /\.ts$/,
  tsxFile: /\.tsx$/,
}

// obj['cssFile'] = 'a' 바로에러, 정규식 표현이 아니기때문에

Object.keys(obj).forEach(function(value){ // value에 마우스를 갖다대면 value: string 이라고 타입추론이 된다.
  console.log(typeof value)
})


// 인터페이스 확장 extends
interface Person {
  name: string;
  age: number; // 옵셔널 선택자 ? 동일하게 적용 가능
}
interface Developer extends Person {
  language: string;
  salay: number;
}
const joo: Developer = { name: 'joo', age: 20, language: 'ts', salay: 4200 };


