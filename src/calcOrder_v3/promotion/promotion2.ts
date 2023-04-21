import {IPromotion, Promotion} from './abstract';
import {IApplyPromotionReturn} from '../types';

class Promotion2 extends Promotion implements IPromotion {
    private readonly FREE_SHIPPING_THRESHOLD = 3;

    applyPromotion(): IApplyPromotionReturn {

        let discount = 1;
        let shippingFee = this.SHIPPING_FEE;

        const applied = this.totalQuantity >= this.FREE_SHIPPING_THRESHOLD;
        if (applied) {
            shippingFee = 0;
        }

        return { discount, shippingFee, applied };
    }
}

export default Promotion2
