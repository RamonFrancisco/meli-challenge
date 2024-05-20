"use client";

import Error from "@/app/components/error";
import Loading from "@/app/components/loading";
import ProductItem from "@/app/components/productItem";
import { useBreadcrumb } from "@/app/context/breadcrumb-context";
import ProductServices from "@/app/services/Product";
import styles from "@/app/styles/pages/ProductList.module.scss";
import { useCallback, useEffect, useState } from "react";

export default function ProductList({ searchParams }) {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { search } = searchParams;
  const { setBreadcrumbs } = useBreadcrumb();

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const { items, categories } = await ProductServices.searchProducts({
        query: search,
      });
      setItems(items);
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
    <div className={styles.productListContent}>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        items?.map((item) => (
          <ProductItem
            id={item.id}
            flag={item.free_shipping}
            key={item.id}
            url={item.picture_url}
            title={item.title}
            priceAmount={item.price.amount}
          />
        ))
      )}
    </div>
  );
}
