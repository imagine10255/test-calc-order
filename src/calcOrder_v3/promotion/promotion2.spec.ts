import {IItem} from '../types';
import Promotion2 from './promotion2';


describe('processOrder', () => {

    const items: IItem[] = [
        { product: '商品A', price: 2001, quantity: 1 },
        { product: '商品B', price: 3000, quantity: 1 },
        { product: '商品C', price: 500, quantity: 1 },
    ];


    test('should apply Promotion2 correctly', () => {
        const promotion2 = new Promotion2(items);
        const result = promotion2.applyPromotion();

        expect(result.shippingFee).toBe(0);
        expect(result.discount).toBe(1);
        expect(result.applied).toBe(true);
    });

    test('should apply Promotion2 not correctly', () => {
        const promotion2 = new Promotion2([items[0]]);
        const result = promotion2.applyPromotion();

        expect(result.shippingFee).toBe(100);
        expect(result.discount).toBe(1);
        expect(result.applied).toBe(false);
    });

});
