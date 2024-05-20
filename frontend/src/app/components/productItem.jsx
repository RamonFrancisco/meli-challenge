import styles from "@/app/styles/pages/ProductList.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function ProductItem({ id, url, priceAmount, title, flag }) {
  return (
    <Link href={`/items/${id}`} className={styles.productListItem}>
      <div className={styles.productListItemThumbnail}>
        <img src={url} />
      </div>
      <div className={styles.productListItemDescription}>
        <h3>{title}</h3>
        <div className={styles.productListItemPrice}>
          <p>$ {priceAmount}</p>
          {flag && (
            <Image
              src={"/ic_shipping.png"}
              width={18}
              height={18}
              alt="Frete grátis"
            />
          )}
        </div>
      </div>
    </Link>
  );
}
