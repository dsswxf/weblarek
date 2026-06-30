import { IProduct } from "../../types";

export class BasketModel {
    protected items: IProduct[] = [];

    add(item: IProduct): void {
        this.items.push(item);
    }

    remove(id: string): void {
        this.items = this.items.filter(item => item.id !== id);
    }

    getItems(): IProduct[] {
        return this.items;
    }

    clear(): void {
        this.items = [];
    }

    getTotal(): number {
        return this.items.reduce((total, item) => total + (item.price || 0), 0);
    }

    getCount(): number {
        return this.items.length;
    }

    inBasket(id: string): boolean {
        return this.items.some(item => item.id === id);
    }
}