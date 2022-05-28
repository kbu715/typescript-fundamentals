// 이넘(Enum)
enum Avengers {
  Capt = 10,
  Ironman, // 11
  Hulk, // 12
}
const myHero = Avengers.Capt;

// console.log(myHero);

// any
let a: any = 'hi';
a = 20;
a = false;

// void
function sayHi(): void {
  // return 'a';
}

// 타입 추정 (type assertion)
let str = '이건 문자열 타입이 됩니다.';

let num: number;
num = 'str' as any;

const divElement = document.querySelector('#app');
divElement.innerHTML;
// const empty = document.querySelector('#app') as null;
// empty.innerHTML;
