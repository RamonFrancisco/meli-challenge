"use client";

import Error from "@/app/components/error";
import Loading from "@/app/components/loading";
import { useBreadcrumb } from "@/app/context/breadcrumb-context";
import ProductServices from "@/app/services/Product";
import styles from "@/app/styles/pages/ProductItem.module.scss";
import { useState, useCallback, useEffect } from "react";

export default function ProductItem({ params }) {
  const [product, setProduct] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { setBreadcrumbs } = useBreadcrumb();
  const { id } = params;

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const { item, categories } = await ProductServices.getProduct({ id });
      setProduct(item);
      setBreadcrumbs(categories);
    } catch (error) {
      setIsError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.productContent}>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        <>
          <div className={styles.productHero}>
            <div className={styles.productHeroImage}>
              <img src={product.picture_url} />
            </div>
            <div className={styles.productHeroData}>
              <span>
                {product.condition} - {product.sold_qty} vendidos
              </span>
              <h2>{product.title}</h2>
              <p>
                $ {product.price?.amount}
                <span>{product.price?.decimals}</span>
              </p>
              <button type="button">Comprar</button>
            </div>
          </div>

          <div className={styles.productDescription}>
            <h3>Descrição do produto</h3>
            <p>{product.description}</p>
          </div>
        </>
      )}
    </div>
  );
}
