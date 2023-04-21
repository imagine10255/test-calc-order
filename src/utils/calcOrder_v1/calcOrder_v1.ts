interface IItem {
    "product": string
    "price": number,
    "quantity": number
}

/**
 * 計算訂單 v1
 * @param items
 * @param transportation
 */
export const calcOrder = (items: IItem[], transportation: number) => {

    const itemQtyTotal = items.reduce((curr, row) => {
        return curr + row.quantity;
    }, 0);

    const itemAmountTotal = items.reduce((curr, row) => {
        return curr + (row.price * row.quantity);
    }, 0);

    if(itemAmountTotal >= 5000){
        return Math.floor(itemAmountTotal * 0.8) + transportation;
    }
    if(itemQtyTotal >= 3){
        return itemAmountTotal;
    }
    return itemAmountTotal + transportation;
}



