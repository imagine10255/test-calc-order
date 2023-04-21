

export interface IItem {
    product: string;
    price: number;
    quantity: number;
}

// 活動規則
const DISCOUNT_THRESHOLD = 5000;
const DISCOUNT_RATE = 0.8;
const FREE_SHIPPING_THRESHOLD = 3;
const SHIPPING_FEE = 100;

/**
 * 計算折扣運費
 * @param items
 */
function calculateDiscountAndShipping(items: IItem[]): { discount: number; shippingFee: number } {
    const totalAmount = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);

    let discount = 1;
    let shippingFee = SHIPPING_FEE;

    if (totalAmount >= DISCOUNT_THRESHOLD) {
        discount = DISCOUNT_RATE;
    } else if (totalQuantity >= FREE_SHIPPING_THRESHOLD) {
        shippingFee = 0;
    }

    return { discount, shippingFee };
}

/**
 * 處理訂單
 * @param items
 */
function processOrder(items: IItem[]): { totalAmount: number; payableAmount: number; shippingFee: number } {
    const { discount, shippingFee } = calculateDiscountAndShipping(items);

    const totalAmount = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const payableAmount = (totalAmount * discount) + shippingFee;

    return {
        totalAmount,
        payableAmount,
        shippingFee,
    };
}




export {processOrder};
