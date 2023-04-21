import {IItem, ICalculateTotalAmountAndQuantityReturn} from '../types';


export interface IPromotion extends Promotion {
    applyPromotion(): { discount: number; shippingFee: number; applied: boolean };
}

abstract class Promotion {
    protected readonly SHIPPING_FEE: number = 100;
    protected readonly totalAmount: number = 0;
    protected readonly totalQuantity: number = 0;

    constructor(items: IItem[]) {
        const {totalAmount, totalQuantity} = this.calculateTotalAmountAndQuantity(items);
        this.totalAmount = totalAmount;
        this.totalQuantity = totalQuantity;
    }

    private calculateTotalAmountAndQuantity(items: IItem[]): ICalculateTotalAmountAndQuantityReturn {
        const totalAmount = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
        return { totalAmount, totalQuantity };
    }
}

export {Promotion}
