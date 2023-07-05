export type ICheckout = {
  personalData: IPersonalData;
  paymentData: IPaymentData;
  orderData: IOrderData;
};

export interface IPersonalData {
  name: string;
  lastName: string;
  email: string;
  address: IAddress;
  
}
export interface IAddress {
  street: string;
  city: string;
  department: string;
  zipCode: string;
}

export interface IPaymentData {
  number: string;
  nameOnCard: string;
  expDate: string;
  cvc: string;
}

export interface IOrderData {
  name: string;
  amount: number;
  total: number;
  image: string;
}

export type CheckoutInput = {
  customer: {
    name: string;
    lastName: string;
    email: string;
    address: {
      street: string;
      city: string;
      floor: string;
      zipCode: string;
    };
  };
  card: {
    number: string;
    cvc: string;
    expDate: string;
    nameOnCard: string;
  };
  order: {
    name: string;
    image: string;
    amount: number;
    price: number;
  };
};