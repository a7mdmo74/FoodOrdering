export type Order = {
  id: number;
  created_at: string;
  total: number;
  status: string;
  user_id: string;
  order_items: OrderItem[];
};

export type OrderItem = {
  id: number;
  order_id: number;
  size: string;
  quantity: number;
  product_id: number;
  products: Product;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};
