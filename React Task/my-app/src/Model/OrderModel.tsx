export interface Item {
    id: number;
    author_id: number;
    title: string;
    cover_image: string;
    pages: number;
    releaseDate: string;
    isbn: string;
    qty: number;
}

export interface ShippingAddress {
    name: string;
    email: string;
    address: string;
}

export interface OrderModel {
    orderedAt: Date;
    items: Item[];
    grandTotal: number;
    shippingAddress: ShippingAddress;
    id: number;
    status: string;
}
