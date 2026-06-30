import { IBuyer, TPayment, TBuyerErrors } from "../../types";

export class BuyerModel {
    protected payment: TPayment | null = null;
    protected email: string = "";
    protected phone: string = "";
    protected address: string = "";

    setPayment(value: TPayment): void {
        this.payment = value;
    }

    setEmail(value: string): void {
        this.email = value;
    }

    setPhone(value: string): void {
        this.phone = value;
    }

    setAddress(value: string): void {
        this.address = value;
    }

    getData(): IBuyer {
        return {
            payment: this.payment,
            email: this.email,
            phone: this.phone,
            address: this.address
        };
    }

    clear(): void {
        this.payment = null;
        this.email = "";
        this.phone = "";
        this.address = "";
    }

    validate(): TBuyerErrors {
        const errors: TBuyerErrors = {};

        if (!this.payment) {
            errors.payment = "Не выбран способ оплаты";
        }
        if (!this.address.trim()) {
            errors.address = "Укажите адрес доставки";
        }
        if (!this.email.trim()) {
            errors.email = "Укажите email";
        }
        if (!this.phone.trim()) {
            errors.phone = "Укажите телефон";
        }

        return errors;
    }
}