import {IItem, processOrder} from './calcOrder_v2';


describe('processOrder', () => {

    test('滿 3 件免運費', () => {
        const newItems: IItem[] = [
            { product: '商品A', price: 1000, quantity: 1 },
            { product: '商品B', price: 1500, quantity: 1 },
            { product: '商品C', price: 500, quantity: 1 },
        ];
        const result = processOrder(newItems);
        expect(result.totalAmount).toBe(3000);
        expect(result.payableAmount).toBe(3000); // 不打折，免运费
        expect(result.shippingFee).toBe(0);
    });

    test('滿 5000 打 8 折優先於滿 3 件免運費', () => {
        const newItems: IItem[] = [
            { product: '商品A', price: 2000, quantity: 1 },
            { product: '商品B', price: 3000, quantity: 1 },
            { product: '商品C', price: 500, quantity: 1 },
        ];
        const result = processOrder(newItems);
        expect(result.totalAmount).toBe(5500);
        expect(result.payableAmount).toBe(5500 * 0.8 + 100); // 打 8 折后加上运费
        expect(result.shippingFee).toBe(100);

    });

    test('為滿足活動條件', () => {
        const newItems = [{ product: '商品A', price: 2000, quantity: 1 }];
        const result = processOrder(newItems);
        expect(result.totalAmount).toBe(2000);
        expect(result.payableAmount).toBe(2000 + 100); // 不打折 + 运费
        expect(result.shippingFee).toBe(100);
    });
});
