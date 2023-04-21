import {IPromotion, Promotion} from './abstract';
import {IApplyPromotionReturn} from '../types';

class Promotion3 extends Promotion implements IPromotion{
    private readonly DISCOUNT_THRESHOLD = 8000;
    private readonly DISCOUNT_RATE = 0.8;

    applyPromotion(): IApplyPromotionReturn {

        let discount = 1;
        let shippingFee = this.SHIPPING_FEE;

        const applied = this.totalAmount >= this.DISCOUNT_THRESHOLD;
        if (applied) {
            discount = this.DISCOUNT_RATE;
            shippingFee = 0;
        }

        return { discount, shippingFee, applied};
    }
}

export default Promotion3

