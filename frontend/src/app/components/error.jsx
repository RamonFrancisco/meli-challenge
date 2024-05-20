import React from "react";
import styles from "@/app/styles/components/Error.module.scss";

export default function Error() {
  return (
    <div className={styles.errorContent}>
      <h2>Ops!</h2>
      <p>Houve um problema tente novamente</p>
    </div>
  );
}
