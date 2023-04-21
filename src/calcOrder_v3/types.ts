
export interface IItem {
    product: string;
    price: number;
    quantity: number;
}


export interface ICalculateTotalAmountAndQuantityReturn { totalAmount: number; totalQuantity: number };
export interface IApplyPromotionReturn { discount: number; shippingFee: number, applied: boolean };
export interface IProcessOrder { totalAmount: number; payableAmount: number; shippingFee: number }



