interface Hero {
  name: string;
  skill: string;
}

const capt: Hero = {
  name: 'paul',
  skill: 'shield',
};

capt.name = 'kang';

const capt2 = {} as Hero;

capt2.name = 'capt';
capt2.skill = 'dddd';

// const capt3: string | null;

// capt3!;

// 어떤 타입이다 라고 단언하는 것은 언제나 리스크가 있다.
// 그럼에도 불구하고 타입에 확신이 있으면 Non null assertion이나 type assertion(`as`)을 충분히 활용하면 좋다.
