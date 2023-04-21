import {IPromotion, Promotion} from './abstract';
import {IApplyPromotionReturn} from '../types';

class Promotion1 extends Promotion implements IPromotion{
    private readonly DISCOUNT_THRESHOLD = 5000;
    private readonly DISCOUNT_RATE = 0.8;

    applyPromotion(): IApplyPromotionReturn {

        let discount = 1;
        const shippingFee = this.SHIPPING_FEE;

        const applied = this.totalAmount >= this.DISCOUNT_THRESHOLD;
        if (applied) {
            discount = this.DISCOUNT_RATE;
        }

        return { discount, shippingFee, applied};
    }
}

export default Promotion1


