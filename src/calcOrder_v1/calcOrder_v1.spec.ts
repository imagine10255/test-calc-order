import {calcOrder} from './calcOrder_v1';

describe('simpleDate', () => {
    it('test base', () => {
        const items = [
            {
                "product": "book",
                "price": 500,
                "quantity": 1
            },
            {
                "product": "pen",
                "price": 30,
                "quantity": 1
            }
        ];
        const transportation = 80;
        const res = 500 + 30 + transportation;
        expect(calcOrder(items, transportation)).toBe(res);
    });

    it('test 5000 x 0.8', () => {
        const price = 5001;
        const items = [
            {
                "product": "book",
                "price": price,
                "quantity": 1
            },
        ];
        const total = Math.floor(price * 0.8) + 80;
        const transportation = 80;
        expect(calcOrder(items, transportation)).toBe(total);
    });

    it('test 5000 x 0.8 , qty 3', () => {
        const price = 500;
        const items = [
            {
                "product": "book",
                "price": price,
                "quantity": 3
            },
        ];
        const transportation = 80;
        expect(calcOrder(items, transportation)).toBe(1500);
    });
});
