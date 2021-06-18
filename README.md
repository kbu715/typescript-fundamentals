# Typescript Fundamentals

## 타입스크립트 장점

- error의 사전 방지
- 자동완성 및 코드 가이드 (VSCODE intellisense 기능활용)
- 결국 개발 생산성 향상

## 타입스크립트 시작

#### **npm i typescript -g**

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
- Array<>
- number[], string[]
- boolean
- object
{ age: number; name: string }

```typescript
    const person: { age: number; name: string } = { age: 100, name: 'Capt' };
```

- tuple : 모든 인덱스의 타입이 정해져있는 배열
  예) [string, number]

```typescript
    let address: [string, number] = ['종로', 5000]
```
- enum 
```typescript
  enum Avengers { Capt, IronMan, Thor }
  let hero: Avengers = Avengers.Capt;
```
enum은 index 번호로도 접근할 수 있다.
```typescript
  enum Avengers { Capt, IronMan, Thor }
  let hero: Avengers = Avengers[0];
```

- any
기존에 자바스크립트로 구현되어 있는 웹 서비스 코드에 타입스크립트를 점진적으로 적용할 때 활용하면 좋은 타입이다.
단어 그대로 모든 타입에 대해서 허용한다는 의미. 

- void
변수에는 undefined와 null만 할당하고, 함수에는 반환 값을 설정할 수 없는 타입이다.
```typescript
let unuseful: void = undefined;
function notuse(): void {
  console.log('sth');
}
```

- never
함수의 끝에 절대 도달하지 않는다는 의미를 지닌 타입.
```typescript
// 이 함수는 절대 함수의 끝까지 실행되지 않는다는 의미
function neverEnd(): never {
  while (true) {

  }
}
```

#### 함수 타입 - 파라미터, 반환값

```typescript
// 함수에 타입을 정의하는 가장 기본적인 방식
function sum(a: number, b: number): number {
    return a+b;
}
```

#### 파라미터를 제한하는 특성

```typescript
    function sum(a:number, b:number):number {
        return a+b;
    }

    sum(10,20,30,40);

    // '2개의 인수가 필요한데 4개를 가져왔습니다' 라는 에러가 난다.
    // 자바스크립트는 유연하게 넘어가지만 타입스크립트는 좀더 엄격하게 검사한다.
```

#### 함수의 옵셔널 파라미터 Optional Parameter

```typescript
    function log(a: string, b?: string, c?: string){
      // ......
    }

    log('hello')
    log('hello', 'world')
    log('hello', 'world', '!!!')

    //특정 파라미터를 선택적으로 쓰고싶다하면 ?(Optional Parameter)를 쓰자.
```

#### 인터페이스

```typescript
// 인터페이스
interface User {
  name: string;
  age: number;
}

const seho: User = {
  age: 40,
  name: '세호'
}
```

```typescript
// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number;
}

let sum: SumFunction;
sum = function(a: number, b: number){
    return a + b;
}
```

```typescript
// 배열의 인덱싱에 사용하는 경우
interface StringArray {
    [index: number]: string;
}
    let arr: StringArray;
    arr[0] = 'hi';
    arr[1] = 10;
```

```typescript
//객체 접근 방식인 <딕셔너리 패턴><dictionary pattern>
interface StringRegexDictionary {
  [key: string]: RegExp
}

let obj: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/
}

// key: string 으로 자동 추론된다.
Object.keys(obj).forEach(function(key){
  //...
}))

```

```typescript
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
    age: 31,
    language: 'typescript'
}
```

##### 읽기 전용 속성
읽기 전용 속성은 인터페이스로 객체를 처음 생성할 때만 값을 할당하고 그 이후에는 변경할 수 없는 속성을 의미한다. 문법은 다음과 같이 readonly 속성을 앞에 붙임.

```typescript
interface CraftBeer {
  readonly brand: string;
}
```

```typescript
let myBeer: CraftBeer = {
  brand: 'Belgian Monk'
};
myBeer.brand = 'Korean Carpenter'; // error!
```

##### 읽기 전용 배열
배열을 선언할 때 `ReadonlyArray<T>` 타입을 사용하면 읽기 전용 배열을 생성할 수 있다.

```typescript
let arr: ReadonlyArray<number> = [1,2,3];
arr.splice(0,1); // error
arr.push(4); // error
arr[0] = 100; // error
arr = [10, 20, 30]; // error
```
위처럼 배열을 ReadonlyArray로 선언하면 배열의 내용을 변경할 수 없다. 선언하는 시점에만 값을 정의 할 수 있다. 주의!
#### 타입 별칭(Type Aliases)

타입 별칭은 특정 타입이나 인터페이스를 참조할 수 있는 타입 변수를 의미한다.

```typescript
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

![type별칭](https://user-images.githubusercontent.com/63832678/105606589-ae65e100-5ddd-11eb-9d7d-b2ea90e42180.png)

![인터페이스](https://user-images.githubusercontent.com/63832678/105606601-c473a180-5ddd-11eb-9177-5aa31e45abe4.png)


type vs interface
타입별칭과 인터페이스의 가장 큰 차이점은 타입의 확장 가능/불가능 여부이다.
인터페이스는 확장이 가능한데(extends, 상속) 반해 타입별칭은 불가능하다. 따라서, type보다는 interface로 선언해서 사용하는 것을 추천한다.

- 좋은 소프트웨어는 언제나 확장이 용이해야 한다. 😀

#### Union Type - |

하나의 타입 이상 쓸 수 있게 해준다. 

```typescript
function logMessage(value: string | number | boolean){
    console.log(value)
}
logMessage('hello')
logMessage(100)
```

유니온 타입의 장점
- 특정한 타입에 대한 api나 속성들을 미리 제공받을 수 있다.
```typescript
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

- 인터페이스 같은 구조체 여러개를 유니언 타입으로 썼을 때 공통된 속성만 쓸 수 있다.

```typescript
  interface Developer {
    name: string;
    skill: string;
  }

  interface Person {
    name: string;
    age: number;
  }

  function askSomeone(someone: Developer | Person) {
    someone.name // Ok
    someone.skill // Error
    someone.age // Error
  }
```

 `타입 가드` : 특정 타입으로 타입의 범위를 좁혀나가는 (필터링하는) 과정

#### Intersection Type - &

```typescript
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
  someone.age; // O 
  someone.skill;// O
  // 모든 속성 접근 가능
}

```

#### 유니온 타입과 인터섹션 타입의 차이점

유니온 **|** : a 타입이거나 b타입이거나
인터섹션 **&** : a 타입과 b 타입의 속성을 모두 합친 새로운 `c 타입`, 호출할 때 모든 속성을 다 적어줘야 에러가 안난다.

📌 상대적으로 유니언 타입이 더 많이 쓰인다.

#### 이넘 enum
특정 값들의 집합을 의미하는 자료형이다. 예를 들어 `드랍다운` 목록으로 사용하기 좋다.
좀 더 정확한 코드와 예외처리의 코드량을 줄일 수 있다.

- 숫자형 enum

```typescript
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

- 문자형 enum
```typescript
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

```typescript
enum Answer {
  Yes = 'Y',
  No = 'N'
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

```typescript
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

멤버 변수에 대한 변수의 유효범위 => **private**, **public**, **protected**(기본적으로 public이다)
__readonly__ : 접근만 할 수 있고 변경할 순 없다. => 읽기만 할 수 있다.


### 제네릭 Generics
제네릭은 C#, Java 등의 언어에서 재사용성이 높은 컴포넌트를 만들 때 자주 활용되는 특징입니다. 특히, 한가지 타입보다 여러 가지 타입에서 동작하는 컴포넌트를 생성하는데 사용됩니다.

예시
```typescript
function getText<T>(text: T): T {
  return text;
}
```

```typescript
getText<string>('hi');
getText<number>(10);
getText<boolean>(true);
```

```typescript
//인터페이스 제네릭 사용 예
interface Item<T> {
  value: T;
  selected: boolean;
}
```

```typescript
//제네릭의 타입 제한1 
function logTextLength<T>(text: T[]): T[] { //배열인 것을 힌트를 준다고 생각한다.
  console.log(text.length);
  text.forEach(function (text) {
    console.log(text);
  })
  return text;
}
```

```typescript
//제네릭의 타입 제한2 정의된 타입 이용하기
interface LengthType {
  length: number;
}

// T는 lengthType의 하위 타입
function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}

logTextLength(10); // error
logTextLength({ length: 10 });

```

```typescript
//제네릭의 타입 제한3 - keyof
interface ShoppingItems {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

getShoppingItemOption('name') // name
getShoppingItemOption('price') // price
getShoppingItemOption('stock') // stock
```

### 타입추론

#### 타입추론의 기본
```typescript
  let x = 3;
```
위와 같이 x에 대한 타입을 따로 지정하지 않더라도 일단 x는 number로 간주된다. 이렇게 변수를 선언하거나 초기화 할 때 타입이 추론된다.
이외에도 변수, 속성, 인자의 기본 값, 함수의 반환값 등을 설정할 때 타입 추론이 일어난다.
```typescript
  function getB(b = 10) {
    const c = 'hi';
    return b + c; // return 값도 string으로 추론
  }

  // 10 + '10' (string으로 간주됨)
```

복잡한 구조
```typescript
interface Dropdown<T> {
  value: T
  title: string;
}

interface DetailedDropdown<K> extends Dropdown<K> {
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
```typescript
let arr = [0, 1, null];
// (number | null)[]
```
위 변수 arr의 타입을 추론하기 위해서 배열의 각 아이템을 크게 number와
null로 구분하는데 이 때 `Best Common Type Algorithm`으로 다른 타입들과
가장 잘 호환되는 타입을 선정.

#### Language Server
타입스크립트 코드 작성시 `Language Server` 가 돌고 있다고 인식하자.

#### 타입스크립트의 타입 체킹
타입 체킹에 있어서 타입스크립트의 지향점은 타입 체크는 값의 **형태**에 기반하여 이루어져야 한다는 점이다. 이걸 Duck Typing 또는 Structural Subtyping 이라고 한다.

💡💡💡

> Duck Typing : 객체의 변수 및 메서드의 집합이 객체의 타입을 결정하는 것을 의미. 동적 타이핑의 한 종류 
> Structural Subtyping : 객체의 실제 구조나 정의에 따라 타입을 결정하는 것을 의미


### 타입 단언 (type assertion)

타입을 개발자가 더 잘 알고 있다!! 타입스크립트에게 이건 무슨 타입이야 라고 말하는 것.

```typescript
  let a;
  a = 'a';
  a = 30;
  let b = a as string;
```

타입 단언은 `DOM API` 조작에 가장 많이 쓰인다.
```typescript
let div = document.querySelector('.container') as HTMLDivElement;
div.innerText;
```
#### 타입가드


타입 가드 정의 (실제 많이 사용되는 패턴)
```typescript
  function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined;
  }

  function isPerson(target: Developer | Person): target is Person {
    return (target as Person).age !== undefined;
  }
```
- `is` 라는 키워드가 타입가드에서 사용된다.

사용 예
```typescript
  interface Developer {
    name: string;
    skill: string;
  }

  interface Person {
    name: string;
    age: number;
  }

  if (isDeveloper(tony)) {
    console.log(tony.skill); // 토니는 developer이기 때문에 skill이 제공.
  } else {
    console.log(tony.age);
  }
```


#### 타입 호환 (Type Compatiblility)
타입 호환이란 타입스크립트 코드에서 특정 타입이 다른 타입에 잘 맞는지를 의미한다. 예를들면 아래와 같은 경우

```typescript
interface Ironman {
  name: string;
}

class Avengers {
  name: string;
}

let i: Ironman;
i = new Avengers(); // OK, because of structural typing  
```

#####구조적 타이핑 예시
구조적 타이핑(structural typing)이란 코드 구조 관점에서 타입이 서로 호환되는지의 여부를 판단하는 것이다. 아래 코드를 보자.

```typescript
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
```typescript
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

// 둘다 쌉가능, 구조적으로 같기 때문에 (여기서 구조적으로 같다는 것은 { } 안에 내용이 같다고 봐도 무방하다.)

interface NotEmpty<T> {
    data: T;
}

let notempty1: NotEmpty<string>;
let notempty2: NotEmpty<number>;

// { } 안에 내용이 달라지기 때문에 어느쪽으로든 호환이 될 수 없다.
notempty1 = notempty2; // 호환 x 
notempty2 = notempty1; // 호환 x
```

#### Soundness란?
타입스크립트는 컴파일 시점에 타입을 추론할 수 없는 특정 타입에 대해서 일단 안전하다고 보는 특성이 있다. 이걸 "들리지 않는다(it is said to not be sound)"라고 표현한다.


---

#### 타입스크립트 선언 파일

타입스크립트 선언 파일 d.ts는 타입스크립트 코드의 타입 추론을 돕는 파일이다. 예를 들어 전역 변수로 선언한 변수를 특정 파일에서
import 구문 없이 사용하는 경우 해당 변수를 인식하지 못한다. 그럴 때 아래와 같이 해당 변수를 선언해서 에러가 나지 않게 할 수 있다.

```typescript
  declare const global = 'sth';
```

#### 전역 변수와 전역 함수에 대한 타입 선언

```typescript
  // 전역 변수
  declare const pi = 3.14;

  // 전역 함수
  declare namespace myLib {
    function greet(person: string): string;
    let name: string;
  }

  myLib.greet('방루이');
  myLib.name = '방루이';
```

> Tip
> Use declare namespace to describe types or values accessed by dotted notation.

```typescript
  declare namespace globalValues {
    let redColor: string;
    let primaryColor: string;
  }

  globalValues.redColor;
  globalValues.primaryColor;
```

#### 배열 인덱싱

```typescript

  interface StringArray {
    [index: number]: string;
  }

  const arr: StringArray = ['Thor', 'Hulk'];
  arr[0]; // 'Thor'
```

타입으로 배열 변경 제한

```typescript
  interface ReadonlyStringArray {
    readonly [index: number]: string;
  }

  const arr2: ReadonlyStringArray = ['react', 'vue'];
  arr2[2] = 'angular'; // Error!!!
```



==============================

### Advanced Type

#### Utility Type (제네릭 타입이라고도 불린다.)

유틸리티 타입은 **이미 정의해 놓은 타입을 변환할 때** 사용하기 좋은 타입 문법이다.
유틸리티 타입을 꼭 쓰지 않더라도 기존의 인터페이스, 제네릭 등의 기본 문법으로
충분히 타입을 변환할 수 있지만 유틸리티 타입을 쓰면 훨씬 더 간결한 문법으로
타입을 정의할 수 있다.

##### Partial

```typescript
  interface Address {
    email: string;
    address: string;
    detailAddress: string;
  }

  type MayHaveEmail = Partial<Address>; 

  const me: MayHaveEmail = {}; // 가능
  const you: MayHaveEmail = { email: 'kang@naver.com' }; // 쌉가능
  const all: MayHaveEmail = { email: 'paul@gmail.com', address: '서울 종로구', detailAddress: '새문안로 3길' }; // 쌉가능

  // 사실 실무에서 거의 `optional` 으로 처리하는 것 같다.

  interface OptionalAddress {
    email?: string;
    address?: string;
    detailAddress?: string;
  }
```

##### Pick

픽 타입은 특정 타입에서 몇개의 속성을 선택하여 타입을 정의
```typescript
  interface Hero {
    name: string;
    skill: string;
  }

  const human: Pick<Hero, 'name'> = {
    name: '그냥 사람',
  }
```

##### Omit

특정 타입에서 지정된 속성만 제거한 타입을 정의한다.

```typescript

  interface AddressBook {
    name: string;
    phone: number;
    address: string;
    company: string;
  }

  const phoneBook: Omit<AddressBook, 'address'> = {
    name: 'boo',
    phone: '01000003333',
    company: 'babo'
  }

  const jjambbong: Omit<AddressBook, 'address' | 'company'> = {
    name: 'jjangjjang',
    phone: 01022223333'
  }

```

#### Mapped Type

맵드 타입이란 기존에 정의되어 있는 타입을 새로운 타입으로 변환해 주는 문법을 의미한다. 마치 자바스크립트 map() API 함수를 타입에 적용한 것과 같은 효과.


맵드 타입의 기본 문법

{ [ P in K ] : T }

{ [ P in K ] ? : T }

{ readonly [ P in K ] : T }

{ readonly [ P in K ] ? : T }

* 여기서 `P in K` 는 자바스크립트의 `for in` 처럼 순회를 한다.

맵드 타입 실용 예제
```typescript

// 공식문서 맵드 타입의 구조
type Subset<T> = {
  [K in keyof T]?: T[K];
}

/*
파셜(Partial)의 내부 구조와 그냥 똑같다.

type Partial<T> = {
    [P in keyof T]?: T[P];
};
*/

```

위 Subset 타입을 적용하면 아래와 같은 객체를 모두 정의할 수 있다.

```typescript
  interface Person {
    name: string;
    age: string;
  }

  const ageOnly: Subset<Person> = { age: 23 };
  
  const nameOnly: Subset<Person> = { name: 'paul' };

  const empty: Subset<Person> = { };

  const ironman: Subset<Person> = { name: 'robert', age: 40 };

```