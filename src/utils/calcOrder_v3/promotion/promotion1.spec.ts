import {IItem} from '../types';
import Promotion1 from './promotion1';


describe('processOrder', () => {

    const items: IItem[] = [
        { product: '商品A', price: 2001, quantity: 1 },
        { product: '商品B', price: 3000, quantity: 1 },
        { product: '商品C', price: 500, quantity: 1 },
    ];




    test('should apply Promotion1 correctly', () => {
        const promotion1 = new Promotion1(items);
        const result = promotion1.applyPromotion();

        expect(result.shippingFee).toBe(100);
        expect(result.discount).toBe(0.8);
        expect(result.applied).toBe(true);
    });

    test('should apply Promotion1 not correctly', () => {
        const promotion1 = new Promotion1([items[0]]);
        const result = promotion1.applyPromotion();

        expect(result.shippingFee).toBe(100);
        expect(result.discount).toBe(1);
        expect(result.applied).toBe(false);
    });

});
