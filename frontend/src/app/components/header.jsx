import React from "react";
import styles from "@/app/styles/Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/Logo_ML.png" />
      </div>
      <form className={styles.form}>
        <label>Digite o que deseja está procurando</label>
        <input type="text" placeholder="Nunca dejes de buscar" />
        <button type="submit">buscar</button>
      </form>
    </header>
  );
}
