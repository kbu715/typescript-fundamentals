## 코로나 세계 현황판 만들기

최종 프로젝트 폴더입니다

## 자바스크립트 프로젝트에 타입스크립트 적용하기

0. 자바스크립트 파일에 JSDoc으로 타입 시스템 입히기
1. 타입스크립트의 기본 환경 구성
   - [x] NPM 초기화
   - [x] 타입스크립트 라이브러리 설치
   - [x] 타입스크립트 설정 파일 생성 및 기본 값 추가
   - [x] 자바스크립트 파일을 타입스크립트 파일로 변환
   - [x] `tsc` 명령어로 타입스크립트 컴파일 하기
2. 명시적인 `any` 선언하기
   - `tsconfig.json` 파일에 `noImplicitAny` 값을 `true`로 추가
   - 가능한한 구체적인 타입으로 타입 정의
3. 프로젝트 환경 구성
   - babel, eslint, prettier 등의 환경 설정
4. 외부 라이브러리 모듈화
    - 
## 참고 자료

- [존스 홉킨스 코로나 현황](https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6)
- [Postman API](https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#27454960-ea1c-4b91-a0b6-0468bb4e6712)
- [Type Vue without Typescript](https://blog.usejournal.com/type-vue-without-typescript-b2b49210f0b)

## Babel

컴파일이면서 변환 
최신 자바스크립트로 작성된 자바스크립트 파일을 구버전 브라우저가 인식할 수 있는 형태로 변환 해준다.

## ESLint

ESLint는 ECMAScript / JavaScript 코드에서 발견 된 패턴을 식별하고보고하는 도구로, 코드의 일관성을 높이고 버그를 방지하는 것을 목표로합니다(번역)

자바스크립트 코드를 에러가 덜 나는 방향으로 작성하도록 도와주는 문법 보조 도구

## Prettier

취향대로 코드 포맷팅
팀단위 개발을 할때 coding convention을 위해 쓰이는 도구
- 가독성에 영향을 어마어마하게 준다.

## TSLint를 쓰지 않는 이유

결정적으로 성능차이
ESLint에 타입스크립트를 얹어서 사용하는 것이 더 좋기 때문

## 모듈 

라이브러리 로딩
```
   import 변수명 from '라이브러리 이름'
```

변수, 함수 임포트 문법
```
   import { } from '파일 상대 경로'
```