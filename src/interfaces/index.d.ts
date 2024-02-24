export interface Coffee {
  id: string;
  image: string;
  badges: string[];
  type: string;
  info: string;
  price: number;
  amount: number;
}

export interface FormData {
  zipcode: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  UF: string;
  payMethod: string;
}
