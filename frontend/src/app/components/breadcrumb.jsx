"use client";

import React from "react";
import styles from "@/app/styles/components/Breadcrumb.module.scss";
import { useBreadcrumb } from "@/app/context/breadcrumb-context";

export default function Breadcrumb() {
  const { breadcrumbs } = useBreadcrumb();
  const lastItem = (index) => breadcrumbs.length - 1 !== index;

  return (
    <nav className={styles.breadcrumbContent}>
      {breadcrumbs.map((breadcrumb, index) => (
        <>
          <span
            className={!lastItem(index) && styles.breadcrumbItemLast}
            key={index}
          >
            {breadcrumb}
          </span>
          <span className={styles.breadcrumbSeparator}>
            {lastItem(index) && ">"}
          </span>
        </>
      ))}
    </nav>
  );
}
