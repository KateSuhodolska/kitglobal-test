export interface Vinyl {
  id: string;
  authorName: string;
  album: string;
  genre: string;
  price: number;
  img: string;
}

export interface CartItem extends Vinyl {
  quantity: number;
}

export interface IState {
  allProducts: Vinyl[];
  cart: CartItem[];
}
