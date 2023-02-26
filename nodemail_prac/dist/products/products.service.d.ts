import { Product } from './product.model';
export declare class ProductsService {
    private products;
    insertProduct(title: string, desc: string, price: number): string;
    getProducts(): Product[];
    getSingleProd(productId: string): {
        id: string;
        title: string;
        description: string;
        price: number;
    };
    updateProd(productId: string, title: string, desc: string, price: number): void;
    deleteProd(prodId: string): void;
    private findProduct;
}
