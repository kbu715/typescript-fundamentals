interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

let products: Product[] = [
  { id: 1, name: '참치김밥', price: 3000, brand: '김가네', stock: 3 },
];

// 상품 목록을 받아오기 위한 api 함수
function fetchProducts(): Promise<Product[]> {
  // ...
}

function displayProduct(productInfo: { id: 1; name: '참치김밥'; price: 3000 }) {
  // ...
}

type ShoppingItem = Pick<Product, 'name' | 'stock' | 'price'>;

function displayProductDetail(shoppingItem: ShoppingItem) { // Product에서 어떤 속성들을 뽑아서 쓸건지

}

// #1 - Partial
type Subset<T> = {
  [K in keyof T]?: T[K];
};

const productDetail: Product = {
  id: 1,
};

// #2 - Pick
type PickFewThings<T, K extends keyof T> = {
  [P in K]: T[P];
}

const productName: PickFewThings<Product, 'name'> = {

}
const productNameWithPrice: PickFewThings<Product, 'name' | 'price'> = {
  
}

// Partial로 대체

// interface UpdateProduct {
//   id?: number;
//   name?: string;
//   price?: number;
//   brand?: string;
//   stock?: number;
// }

type UpdateProduct = Partial<Product>;

// 특정 상품 정보를 업데이트(갱신) 하는 함수
function updateProductItem(productItem: UpdateProduct) {
  
}