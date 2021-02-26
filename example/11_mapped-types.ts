// mapped types
type Heroes = 'Hulk' | 'Thor' | 'Capt';
type HeroAges = { [K in Heroes]: number };
const ages: HeroAges = {
  Hulk: 'a', // hulk's age must be number
  Thor: 30,
  Capt: 20,
};
