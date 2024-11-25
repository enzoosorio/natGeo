export interface Product {
    id: number;
    title: string;
    price: number;
    images: string[];
    description: string;
    category: string;
    itsInHero? : boolean;
  }
  
  export interface CartItem extends Product {
    quantity: number;
  }