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
        let total = 0;
        for (const item of this.items) {
            total += item.price || 0;
        }
        return total;
    }

    getCount(): number {
        return this.items.length;
    }

    inBasket(id: string): boolean {
        return this.items.some(item => item.id === id);
    }
}