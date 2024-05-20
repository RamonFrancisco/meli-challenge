import Header from "../components/header";
import styles from "../styles/Container.module.scss";
import MainStyles from "@/app/styles/Main.module.scss";
import Breadcrumb from "../components/breadcrumb";
import { BreadcrumbProvider } from "../context/breadcrumb-context";

export default function EcommerceLayout({ children }) {
  return (
    <BreadcrumbProvider>
      <div className={styles.container}>
        <Header />
        <main className={MainStyles.main}>
          <Breadcrumb />
          {children}
        </main>
      </div>
    </BreadcrumbProvider>
  );
}
