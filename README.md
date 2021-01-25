# Typescript Fundamentals

## 타입스크립트 장점

- error의 사전 방지
- 자동완성 및 코드 가이드 (VSCODE intellisense 기능활용)
- 결국 개발 생산성 향상

## 타입스크립트 시작

npm i typescript -g

tsc : typescript compile

컴파일 : ts파일을 js로 변환

tsc index.ts

결과적으로 index.js 파일이 같은 폴더 내에 생긴다.

### 타입스크립트 컴파일 옵션

- [https://www.typescriptlang.org/docs/handbook/compiler-options.html](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

자바스크립트 프로젝트를 타입스크립트로 변환할때 점진적으로 알아볼것

### 타입스크립트 기초

#### 기본 타입

- string
- number

- Array<number>, Array<string>
- number[], string[]

- boolean

- object
- { age: number; name: string }

```
    const person: { age: number; name: string } = { age: 100, name: 'Capt' };

```

- 튜플 : 모든 인덱스의 타입이 정해져있는 배열
- [string, number]

```
    let address: [string, number] = ['종로', 5000]
```

#### 함수 타입 - 파라미터, 반환값

```
// 함수에 타입을 정의하는 가장 기본적인 방식
function sum(a: number, b: number): number {
    return a+b;
}
```

#### 파라미터를 제한하는 특성

```
    function sum(a:number, b:number):number {
        return a+b;
    }

    sum(10,20,30,40);

    // `2개의 인수가 필요한데 4개를 가져왔습니다` 라는 에러가 난다.
    // 자바스크립트는 유연하게 넘어가지만 타입스크립트는 좀더 엄격하게 검사한다.
```

#### 함수의 옵셔널 파라미터

```
    function log(a: string, b?: string, c?: string){

    }

    log('hello')
    log('hello', 'world')
    log('hello', 'world', '!!!')

    //특정 파라미터를 선택적으로 쓰고싶다하면 ?(Optional Parameter)를 쓰자.
```

#### 인터페이스

```
// 인터페이스
interface User {
  name: string;
  age: number;
}
```

```
// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number;
}

let sum: SumFunction;
sum = function(a: number, b: number){
    return a + b;
}
```

```
// 배열의 인덱싱에 사용하는 경우
interface StringArray {
    [index: number]: string;
}
    let arr: StringArray;
    arr[0] = 'hi';
    arr[1] = 10;
```

```
//객체 접근 방식인 <딕셔너리 패턴><dictionary pattern>
interface StringRegexDictionary {
  [key: string]: RegExp
}

let obj: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/
}

```

```
// 인터페이스 확장(extends, 상속)
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    language: string;
}


const paul: Developer = {
    name: 'kang',
    age: 20,
    language: 'typescript'
}
```


#### 타입 별칭(Type Aliases)

타입 별칭은 특정 타입이나 인터페이스를 참조할 수 있는 타입 변수를 의미한다.

```
//스트링 타입을 사용할 때
const name: string = 'paul';

//타입 별칭을 사용할 때
type MyName = string;
const name: MyName = 'paul';
```

#### type 과 interface의 차이점

##### 타입 별칭의 특징
타입 별칭은 새로운 타입 값을 하나 생성하는 것이 아니라 정의한 타입에 대해 나중에 쉽게 참고
할 수 있게 이름을 부여하는 것과 같다. 이러한 특징은 VSCode상의 프리뷰 상태로 다른 타입과 어떤 
차이점이 있는지 확인해볼 수 있다.

- type별칭
![type별칭](https://user-images.githubusercontent.com/63832678/105606589-ae65e100-5ddd-11eb-9d7d-b2ea90e42180.png)

- interface
![인터페이스](https://user-images.githubusercontent.com/63832678/105606601-c473a180-5ddd-11eb-9177-5aa31e45abe4.png)


type vs interface
타입별칭과 인터페이스의 가장 큰 차이점은 타입의 확장 가능/불가능 여부이다.
인터페이스는 확장이 가능한데(extends, 상속) 반해 타입별칭은 불가능하다. 따라서, type보다는 interface로 선언해서 사용하는 것을 추천한다.

- 좋은 소프트웨어는 언제나 확장이 용이해야 한다.

#### Union Type 유니온 타입 '|'

하나의 타입 이상 쓸 수 있게 해준다.

```
function logMessage(value: string | number | boolean){
    console.log(value)
}
logMessage('hello')
logMessage(100)
```

유니온 타입의 장점
- 특정한 타입에 대한 api나 속성들을 미리 제공받을 수 있다.
```
function logMessage(value: string | number) {
  if (typeof value === 'string') {
    value.toLocaleUpperCase();
  }
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  throw new TypeError('value must be string or number')
}   
```

타입 가드 : 특정 타입으로 타입의 범위를 좁혀나가는 (필터링하는) 과정
---------------------------------------------------------------

#### Intersection Type - '&'

```
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  someone.name; // O
  someone.age; // X // 공통 속성만 접근 가능 (유니온 타입의 특징)
}

function askSomeone(someone: Developer & Person) {
  someone.name; // O
  someone.age; // O // 모든 속성 접근 가능
  someone.skill;
}

```

#### 유니온 타입과 인터섹션 타입의 차이점

유니온 | : a 타입이거나 b타입이거나
인터섹션 & : a 타입과 b 타입의 속성을 모두 합친 새로운 c 타입, 호출할 때 모든 속성을 다 적어줘야 에러가 안난다.


#### 이넘 enum
특정 값들의 집합을 의미하는 자료형이다. 예를 들어 드랍다운 목록으로 사용하기 좋다.
좀 더 정확한 코드와 예외처리의 코드량을 줄일 수 있다.

- 숫자형 이넘

```
enum Shoes {
  Nike,
  Adidas
}

let myShoes = Shoes.Nike;
console.log(myShoes); // 0 
myShoes = Shoes.Adidas;
console.log(myShoes) // 1

// 별도의 값을 지정하지 않으면 숫자형 이넘으로 취급을 한다.
```

- 문자형 이넘
```
enum Shoes {
  Nike = '나이키',
  Adidas = '아디다스'
}

let myShoes = Shoes.Nike;
console.log(myShoes); // '나이키'
myShoes = Shoes.Adidas;
console.log(myShoes) // '아디다스'
```

#### 이넘 활용 사례

```
enum Answer {
  Yes = 'y',
  No = 'n'
}

function askQuestion(answer: Answer){
  if(answer === Answer.Yes){
    console.log('정답입니다.');
  }
  if(answer === Answer.No){
    console.log('오답입니다.');
  }
}


askQuestion('yes')' // error

askQuestion(Answer.Yes); // O //이넘에서 제공하는 데이터만 넘길 수 있다.
```


#### 타입스크립트 class 

```
class Person {
  private name: string;
  public age: number;
  readonly log: string;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }
}
```

멤버 변수에 대한 변수의 유효범위 -> **private**, **public**, **protected**(기본적으로 public이다)
__readonly__ : 접근만 할 수 있고 변경할 순 없다. -> 읽기만 할 수 있다.