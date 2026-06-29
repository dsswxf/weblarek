import { IApi, IApiListResponse, IProduct, IOrder, IOrderResult } from "../types";

export class AppApi {
    protected api: IApi;

    constructor(api: IApi) {
        this.api = api;
    }

    getProducts(): Promise<IApiListResponse<IProduct>> {
        return this.api.get<IApiListResponse<IProduct>>("/product/");
    }

    submitOrder(order: IOrder): Promise<IOrderResult> {
        return this.api.post<IOrderResult>("/order/", order);
    }
}
