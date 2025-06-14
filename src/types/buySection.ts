
export interface Edition {
  name: string;
  value: string;
  price: number;
  description: string;
}

export interface Color {
  name: string;
  value: string;
  color: string;
}

export interface Accessory {
  name: string;
  price: number;
  note: string;
}

export interface BuyState {
  selectedEdition: string;
  selectedColor: string;
  selectedAccessories: string[];
  engravingText: string;
  customerName: string;
  customerPhone: string;
  paymentMethod: string;
}
