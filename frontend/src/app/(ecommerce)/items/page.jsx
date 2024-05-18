import ProductItem from "@/app/components/productItem";
import styles from "@/app/styles/pages/ProductList.module.scss";

const items = [
  {
    id: "123",
    title: "Moto G6 Muito Conservado 64gbtela 5.7 Vejam As Fotos ",
    price: {
      currency: "BRL",
      amount: 1840,
      decimals: 0,
    },
    picture_url:
      "https://http2.mlstatic.com/D_607581-MLA74463235934_022024-O.jpg",
    condition: "new",
    free_shipping: true,
  },
  {
    id: "431",
    title: "Moto G5 Muito Conservado 64gbtela 5.7 Vejam As Fotos ",
    price: {
      currency: "BRL",
      amount: 5555,
      decimals: 0,
    },
    picture_url:
      "https://http2.mlstatic.com/D_607581-MLA74463235934_022024-O.jpg",
    condition: "new",
    free_shipping: true,
  },
  ,
  {
    id: "431",
    title: "Moto G5 Muito Conservado 64gbtela 5.7 Vejam As Fotos ",
    price: {
      currency: "BRL",
      amount: 555555,
      decimals: 0,
    },
    picture_url:
      "https://http2.mlstatic.com/D_607581-MLA74463235934_022024-O.jpg",
    condition: "new",
    free_shipping: true,
  },
];

export default function ProductList() {
  return (
    <div className={styles.productListContent}>
      {items.map((item) => (
        <ProductItem
          key={item.id}
          url={item.picture_url}
          title={item.title}
          price={item.price.amount}
        />
      ))}
    </div>
  );
}
