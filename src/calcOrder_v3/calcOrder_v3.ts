import {IItem, IProcessOrder} from './types';
import {IPromotion} from './promotion/abstract';


/**
 * 處理訂單
 * @param items
 * @param promotions
 */
function calcOrder(
    items: IItem[],
    promotions: { new (items: IItem[]): IPromotion }[]
): IProcessOrder {
    let discount = 1;
    let shippingFee = 100;

    for (const Promotion of promotions) {
        const promotion = new Promotion(items);
        const result = promotion.applyPromotion();

        if (result.applied) {
            discount = result.discount;
            shippingFee = result.shippingFee;
            break;
        }
    }

    const totalAmount = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const payableAmount = Math.floor(totalAmount * discount) + shippingFee;

    return {
        totalAmount,
        payableAmount,
        shippingFee,
    };
}

export default calcOrder;
