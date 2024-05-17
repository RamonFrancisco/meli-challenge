import styles from "@/app/styles/pages/ProductItem.module.scss";

export default function ProductItem() {
  return (
    <div className={styles.productContent}>
      <div className={styles.productHero}>
        <div className={styles.productHeroImage}>
          <img src="/image.png" />
        </div>
        <div className={styles.productHeroData}>
          <span>Nuevo - 330 vendidos</span>
          <h2>Deco Reverse Sombrero Oxford</h2>
          <p>
            $ 1.980
            <span>00</span>
          </p>
          <button type="button">Comprar</button>
        </div>
      </div>

      <div className={styles.productDescription}>
        <h3>Description del Producto</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          fugiat qui nemo amet eum reiciendis. Adipisci atque voluptatem ullam
          excepturi porro, debitis laborum eligendi optio? Doloribus maiores
          labore repudiandae at.
        </p>
      </div>
    </div>
  );
}
