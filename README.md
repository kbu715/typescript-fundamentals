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