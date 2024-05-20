import React from "react";
import styles from "@/app/styles/components/Loading.module.scss";

export default function Loading() {
  return (
    <div className={styles.loadingContent}>
      <div className={styles.loading}>
        <div></div>
        <div></div>
      </div>
      <p>Carregando...</p>
    </div>
  );
}
