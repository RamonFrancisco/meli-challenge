import styles from "@/app/styles/pages/ProductList.module.scss";

export default function ProductItem({ url, price, title }) {
  return (
    <div className={styles.productListItem}>
      <div className={styles.productListItemThumbnail}>
        <img src={url} />
      </div>
      <div className={styles.productListItemDescription}>
        <h3>{title}</h3>
        <p>
          $ {price}
          {/* //TODO: Pode ter um icone */}
        </p>
      </div>
      <span>Capital Federal</span>
    </div>
  );
}
