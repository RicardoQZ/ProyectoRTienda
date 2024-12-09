export type StoreProductos={
    category:string,
    description:string,
    id:string,
    image:string,
    price:string,
    rating:Object,
    title:string
}

export enum StoreEndpoints{
    PRODUCTOS='https://fakestoreapi.com/products'
}