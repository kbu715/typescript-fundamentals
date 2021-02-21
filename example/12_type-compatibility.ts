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

// notempty1 = notempty2; // 호환 x
// notempty2 = notempty1; // 호환 x