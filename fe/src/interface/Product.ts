export interface IProduct {
    id: string;
    name: string;
    price: number;
    img: string;
    category: string;
    description: string;
}

export interface ProductInputs {
    
    name: string;
    price: number;
    img: string;
    category: string;
    description: string;
}
export interface CartItem {
    id:string;
    name: string;
    price: number;
    img: string;
    category: string;
    description: string;
    quantity: number;
}