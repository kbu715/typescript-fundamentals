function logMessage(value: string) {
  console.log(value);
}
function logMessage(value: number) {
  console.log(value);
}
function logMessage(value: any) {
  console.log(value);
}

// # Union 타입 문법 - `any` 보다는 명시적임
function logMessage(value: string | number) {
  console.log(value);
}

function logMessage(value: string | number) {
  if (typeof value === 'string') {
    value.toLocaleUpperCase();
  }
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  throw new TypeError('value must be string or number')
}

// # Intersection 타입 문법
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) { // union
  someone.name; // O
  someone.age; // X // 공통 속성만 접근 가능 (유니온 타입의 특징)
  someone.skill; // X
}

function askSomeone2(someone: Developer & Person) { // intersection
  someone.name; // O
  someone.age; // O
  someone.skill; // O
}

askSomeone2({ name: 'kang', skill: 'typescript', age: 14 });
// Property 'age' is missing in type '{ name: string; skill: string; }' but required in type 'Person'
// askSomeone2({ name: 'kang', skill: 'typescript' });

// 실무에선 유니언 타입을 훨씬 많이 쓴다.