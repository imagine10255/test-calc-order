import processOrder from './calcOrder_v3';
import {Promotion1, Promotion2, Promotion3} from './promotion';
import {IItem} from './types';


describe('processOrder', () => {

    const items: IItem[] = [
        { product: '商品A', price: 2001, quantity: 1 },
        { product: '商品B', price: 3000, quantity: 1 },
        { product: '商品C', price: 500, quantity: 1 },
    ];

    const promotions = [
        Promotion3,
        Promotion1,
        Promotion2,
    ];

    test('should apply Promotion1 first when both promotions are available', () => {
        const result = processOrder(items, promotions);

        expect(result.totalAmount).toBe(5501);
        expect(result.payableAmount).toBe(4500); // 打折
        expect(result.shippingFee).toBe(100);
    });

    test('should apply Promotion (完全沒符合優惠) are available', () => {
        const result = processOrder([items[0]], promotions);

        expect(result.totalAmount).toBe(2001);
        expect(result.payableAmount).toBe(2101);
        expect(result.shippingFee).toBe(100);
    });

    test('should not apply any promotion when no promotions are available', () => {
        const result = processOrder(items, []);

        expect(result.totalAmount).toBe(5501);
        expect(result.payableAmount).toBe(5601);
        expect(result.shippingFee).toBe(100);
    });

});
