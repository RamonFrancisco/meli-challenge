"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemAdapter = void 0;
const getPrice = (currency, itemPrice) => {
    const [amount, decimals] = String(itemPrice).split('.');
    const price = {
        currency,
        amount: Number(amount),
        decimals: Number(decimals)
    };
    return price;
};
class ItemAdapter {
    adaptItem(meliItem) {
        const price = getPrice(meliItem.currency_id, meliItem.price);
        const pictureUrl = meliItem.pictures.length ? meliItem.pictures[0].url : '';
        // return new Item(meliItem.id, meliItem.title, price, pictureUrl, meliItem.condition, meliItem.shipping.free_shipping, meliItem.description, meliItem.initial_quantity);
        return {
            id: meliItem.id,
            title: meliItem.title,
            price,
            picture_url: pictureUrl,
            condition: meliItem.condition,
            free_shipping: meliItem.shipping.free_shipping,
            description: meliItem.description,
            sold_qty: meliItem.initial_quantity
        };
    }
    adaptSearchItem(meliItem) {
        const price = getPrice(meliItem.currency_id, meliItem.price);
        // return new Item(meliItem.id, meliItem.title, price, meliItem.thumbnail, meliItem.condition, meliItem.shipping.free_shipping);
        return {
            id: meliItem.id,
            title: meliItem.title,
            price,
            picture_url: meliItem.thumbnail,
            condition: meliItem.condition,
            free_shipping: meliItem.shipping.free_shipping
        };
    }
}
exports.ItemAdapter = ItemAdapter;
