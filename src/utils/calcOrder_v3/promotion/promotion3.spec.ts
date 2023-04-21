import {IItem} from '../types';
import Promotion3 from './promotion3';


describe('processOrder', () => {

    const items: IItem[] = [
        { product: '商品A', price: 2001, quantity: 1 },
        { product: '商品B', price: 3000, quantity: 1 },
        { product: '商品C', price: 500, quantity: 1 },
        { product: '商品D', price: 3000, quantity: 1 },
    ];


    test('should apply Promotion3 correctly', () => {
        const promotion3 = new Promotion3(items);
        const result = promotion3.applyPromotion();

        expect(result.shippingFee).toBe(0);
        expect(result.discount).toBe(0.8);
        expect(result.applied).toBe(true);
    });

    test('should apply Promotion3 not correctly', () => {
        const promotion3 = new Promotion3([items[0]]);
        const result = promotion3.applyPromotion();

        expect(result.shippingFee).toBe(100);
        expect(result.discount).toBe(1);
        expect(result.applied).toBe(false);
    });

});
