// utils
// DOM 접근 함수
// HTMLElement 하위 타입들만 받게 제한.
// 타입단언이 이런식으로 (return element as T) 제네릭과 함께 쓰여 좋은 유틸 기능으로 쓰일 수 있다.
// `T extends HTMLElement = HTMLDivElement` 에서 HTMLDivElement 는 디폴트 타입
// const abc = $('.abc'); --> abc 타입은 HTMLDivElement
function $<T extends HTMLElement = HTMLDivElement>(selector: string): T {
  const element = document.querySelector(selector);
  return element as T;
}

export default $;
