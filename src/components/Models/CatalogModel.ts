import { IProduct } from "../../types";

export class CatalogModel {
    protected items: IProduct[] = [];
    protected selectedProduct: IProduct | null = null;

    setItems(items: IProduct[]): void {
        this.items = items;
    }

    getItems(): IProduct[] {
        return this.items;
    }

    getItemById(id: string): IProduct | undefined {
        return this.items.find(item => item.id === id);
    }

    setSelectedProduct(item: IProduct): void {
        this.selectedProduct = item;
    }

    getSelectedProduct(): IProduct | null {
        return this.selectedProduct;
    }
}
