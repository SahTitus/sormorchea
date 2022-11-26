import React, { useState } from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { List } from "react-bootstrap-icons";

function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className={styles.header}>
      <Link href="/">
        <div className={styles.header__zoomEffect}>
          <h2 className={styles.logo}>Sormorchea</h2>
        </div>
      </Link>
      <div className={styles.header__right}>
        <List onClick={showSidebar} className={styles.header__rightIcon} />
        <div
          onClick={showSidebar}
          className={
            sidebar
              ? `${styles.header__rightSidebarActive}`
              : `${styles.header__rightSidebar}`
          }
        >
          <Sidebar close={showSidebar} />
        </div>
      </div>
    </div>
  );
}

export default Header;
