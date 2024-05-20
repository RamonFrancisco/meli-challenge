"use client";

import React, { useState } from "react";
import styles from "@/app/styles/Header.module.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const router = useRouter();
  const [text, setText] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();

    router.push(`/items?search=${text}`);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/Logo_ML.png" alt="Mercado livre" />
      </div>
      <form onSubmit={handleSearch} className={styles.form}>
        <label>Digite o que deseja está procurando</label>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          placeholder="Não deixe de pesquisar"
        />
        <button type="submit">
          <Image src={"/ic_Search.png"} width={18} height={18} alt="Buscar" />
        </button>
      </form>
    </header>
  );
}
