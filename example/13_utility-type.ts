// 유틸리티 타입 구현하기 - Partial

interface UserProfile {
    username: string;
    email: string;
    profilePhotoUrl: string;
}

/*
interface UserProfileUpdate {
    username?: string;
    email?: string;
    profilePhotoUrl?: string;
}
*/

// 📍📍📍

// 축약해보자 !!!

// #1
/* 
type UserProfileUpdate = {
    username?: UserProfile['username'];
    email?: UserProfile['email'];
    profilePhotoUrl?: UserProfile['profilePhotoUrl'];
}
*/

// #2 반복문 활용
/*
type UserProfileUpdate = {
    [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p]
}
*/


// #3 keyof 활용 

type UserProfileUpdate = {
    [p in keyof UserProfile]?: UserProfile[p]
}


// #4 제네릭으로 일반화

type Subset<T> = {
    [P in keyof T]?: T[P]
}

// Partial의 구현체

// type Partial<T> = {
//     [P in keyof T]?: T[P];
// }

// 파셜의 구현체와 같다.