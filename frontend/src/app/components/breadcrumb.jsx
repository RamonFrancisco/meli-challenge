import React from "react";
import styles from "@/app/styles/components/Breadcrumb.module.scss";

const categories = ["celulares", "Motorola", "32GB"];

export default function Breadcrumb() {
  return (
    <nav className={styles.breadcrumbContent}>
      {categories.map((category) => (
        <>
          <span>{category}</span> &gt;
        </>
      ))}
    </nav>
  );
}
