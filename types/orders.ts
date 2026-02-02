import { ProductItem } from "./products";

export enum OrderStatus {
  PENDING = "pending",
  PROCESSING = "processing",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
}

type OrderItem = {
  product: ProductItem;
  quantity: number;
  price: number;
};

export interface Order {
  id: string;
  items: OrderItem[];
  total: number;
  status: string;
  date: string | Date;
  deliveryInformation: {
    address: string;
    phoneNumber: string;
  };
}
