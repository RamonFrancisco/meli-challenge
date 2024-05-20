import { Item, Price } from "../protocols/item.protocol";

interface MeliItemPicture {
  id: string;
  url: string;
}

interface MeliBaseItem {
  id: string;
  title: string;
  category_id: string;
  price: number;
  currency_id: string;
  condition: string;
  shipping: {
    free_shipping: boolean;
  };
}

export type MeliItemDetails = {
  pictures: MeliItemPicture[];
  description: string;
  initial_quantity: number;
} & MeliBaseItem;

export type MeliSearchItem = {
  thumbnail: string;
} & MeliBaseItem;

const getPrice = (currency: string, itemPrice: number) => {
  const [amount, decimals] = String(itemPrice).split(".");
  const price: Price = {
    currency,
    amount: Number(amount),
    decimals: Number(decimals),
  };
  return price;
};

export class ItemAdapter {
  adaptItem(meliItem: MeliItemDetails): Item {
    const price = getPrice(meliItem.currency_id, meliItem.price);
    const pictureUrl = meliItem.pictures.length ? meliItem.pictures[0].url : "";
    // return new Item(meliItem.id, meliItem.title, price, pictureUrl, meliItem.condition, meliItem.shipping.free_shipping, meliItem.description, meliItem.initial_quantity);

    return {
      id: meliItem.id,
      title: meliItem.title,
      price,
      picture_url: pictureUrl,
      condition: meliItem.condition,
      free_shipping: meliItem.shipping.free_shipping,
      description: meliItem.description,
      sold_qty: meliItem.initial_quantity,
    };
  }

  adaptSearchItem(meliItem: MeliSearchItem): Item {
    const price = getPrice(meliItem.currency_id, meliItem.price);
    // return new Item(meliItem.id, meliItem.title, price, meliItem.thumbnail, meliItem.condition, meliItem.shipping.free_shipping);

    return {
      id: meliItem.id,
      title: meliItem.title,
      price,
      picture_url: meliItem.thumbnail,
      condition: meliItem.condition,
      free_shipping: meliItem.shipping.free_shipping,
    };
  }
}
