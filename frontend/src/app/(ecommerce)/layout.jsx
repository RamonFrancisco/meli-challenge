import Header from "../components/header";
import styles from "@/app/styles/container.module.scss";
import MainStyles from "@/app/styles/Main.module.scss";

export default function EcommerceLayout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={MainStyles.main}>{children}</main>
    </div>
  );
}
