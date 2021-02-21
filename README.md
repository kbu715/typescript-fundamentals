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

- `Array<number>`, `Array<string>`
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


### 제네릭
제네릭은 C#, Java 등의 언어에서 재사용성이 높은 컴포넌트를 만들 때 자주 활용되는 특징입니다. 특히, 한가지 타입보다 여러 가지 타입에서 동작하는 컴포넌트를 생성하는데 사용됩니다.

예시
```
function getText<T>(text: T): T {
  return text;
}
```

```
getText<string>('hi');
getText<number>(10);
getText<boolean>(true);
```

```
//인터페이스 제네릭 사용 예
interface Item<T> {
  value: T;
  selected: boolean;
}
```

```
//제네릭의 타입 제한1 
function logTextLength<T>(text: T[]): T[] { //배열인 것을 힌트를 준다고 생각한다.
  console.log(text.length);
  text.forEach(function (text) {
    console.log(text);
  })
  return text;
}
```

```
//제네릭의 타입 제한2 정의된 타입 이용하기
interface LengthType {
  length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}

logTextLength(10); // error
logTextLength({ length: 10 });

```

```
//제네릭의 타입 제한3 - keyof
interface ShoppingItems {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

getShoppingItemOption('name')
getShoppingItemOption('price')
getShoppingItemOption('stock')
```

### 타입추론

#### 타입추론의 기본
```
  let x = 3;
```
위와 같이 x에 대한 타입을 따로 지정하지 않더라도 일단 x는 number로 간주된다. 이렇게 변수를 선언하거나 초기화 할 때 타입이 추론된다.
이외에도 변수, 속성, 인자의 기본 값, 함수의 반환값 등을 설정할 때 타입 추론이 일어난다.
```
  function getB(b = 10) {
    const c = 'hi';
    return b + c; // return 값도 string으로 추론
  }

  // 10 + '10' (string으로 간주됨)
```

복잡한 구조
```
interface Dropdown<T> {
  value: T
  title: string;
}

interface DetailedDropdown<K> extends Dropdown<T> {
  description: string;
  tag: K;
}

var detailItems: DetailedDropdown<number> = {
  value: 'hi', // error: Type 'string' is not assignable to type 'number'.
  title: 'a',
  description: 'b',
  tag: 'c' // error: Type 'string' is not assignable to type 'number'.
}
```

#### 가장 적절한 타입(Best Common Type)
타입은 보통 몇 개의 표현식(코드)을 바탕으로 타입을 추론한다. 그리고 그 표현식을 이용하여 가장 근접한 타입을 추론하게 되는데 이 가장 근접한 타입을 Best Common Type이라고 한다.
```
let arr = [0, 1, null];

```
위 변수 arr의 타입을 추론하기 위해서 배열의 각 아이템을 크게 number와
null로 구분하는데 이 때 Best Common Type 알고리즘으로 다른 타입들과
가장 잘 호환되는 타입을 선정.

#### 타입스크립트의 타입 체킹
타입 체킹에 있어서 타입스크립트의 지향점은 타입 체크는 값의 형태에 기반하여 이루어져야 한다는 점이다. 이걸 Duck Typing 또는 Structural Subtyping 이라고 한다.

> TIP

> Duck Typing : 객체의 변수 및 메서드의 집합이 객체의 타입을 결정하는 > 것을 의미. 동적 타이핑의 한 종류 
> Structural Subtyping : 객체의 실제 구조나 정의에 따라 타입을 결정하는 것을 의미


### 타입 단언 (type assertion)

타입을 개발자가 더 잘 알고 있다!! 타입스크립트에게 이건 무슨 타입이야 라고 말하는 것.

```
  let a;
  a = 'a';
  a = 30;
  let b = a as string;
```

타입 단언은 `DOM API` 조작에 가장 많이 쓰인다.
```
let div = document.querySelector('.container') as HTMLDivElement;
div.innerText;
```
#### 타입가드


타입 가드 정의 (실제 많이 사용되는 패턴)
```
  function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined;
  }
```
사용 예
```
  if (isDeveloper(tony)) {
    tony.skill
  } else {
    tony.age
  }
```


#### 타입 호환 (Type Compatiblility)

```
interface Ironman {
  name: string;
}

class Avengers {
  name: string;
}

let i: Ironman;
i = new Avengers(); // OK, because of structural typing  
```

구조적 타이핑 예시
- **구조적 타이핑(structural typing)**이란 코드 구조 관점에서 타입이 서로 호환되는지의 여부를 판단하는 것이다. 아래 코드를 보자.

```
interface Avengers {
  name: string;
}

let hero: Avengers;
// 타입스크립트가 추론한 y의 타입은 { name: string; location: string; } 입니다.
let capt = { name: "Captain", location: "Pangyo" };
hero = capt;
```
위 코드에서 capt가 hero 타입에 호환될 수 있는 이유는 capt의 속성 중에 name이 있기 때문이다. Avengers 인터페이스에서 name 속성을 갖고 있기 때문에 capt는 Avengers 타입에 호환될 수 있다.


예시들
```
// 인터페이스
interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
}

// 클래스
class Person {
    name: string;
}

let developer: Developer;
let person: Person;

// developer = person; //호환 x

// developer = new Person(); // 호환 x

person = developer; //호환 o



// 함수

let add = function(a : number){
    // ...
}

let sum = function(a : number, b: number){
    // ...
}

// add = sum; //호환 x

sum = add; //호환 o

// 제네릭

interface Empty<T> {
    // ...
}

let empty1: Empty<string>;
let empty2: Empty<number>;

empty1 = empty2;
empty2 = empty1;

// 둘다 쌉가능, 구조적으로 같기 때문에

interface NotEmpty<T> {
    data: T;
}

let notempty1: NotEmpty<string>;
let notempty2: NotEmpty<number>;

notempty1 = notempty2; // 호환 x
notempty2 = notempty1; // 호환 x
```

#### Soundness란?
타입스크립트는 컴파일 시점에 타입을 추론할 수 없는 특정 타입에 대해서 일단 안전하다고 보는 특성이 있다. 이걸 "들리지 않는다(it is said to not be sound)"라고 표현한다.

#### 타입 모듈화
export, import
