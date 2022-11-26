import React, { useState } from "react";
import styles from "../styles/Header.module.css";
import { Flip, Zoom } from "react-reveal";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";

function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className={styles.header}>
      <Link href="/">
        <Zoom right className={styles.header__zoomEffect}>
          <h2 className={styles.logo}>Sormorchea</h2>
        </Zoom>
      </Link>
      <div className={styles.header__right}>
        <IconButton aria-label="menu">
          <Menu onClick={showSidebar} className={styles.header__rightIcon} />
        </IconButton>

        <div
          onClick={showSidebar}
          className={
            sidebar
              ? `${styles.header__rightSidebarActive}`
              : `${styles.header__rightSidebar}`
          }
        >
          <Sidebar close={showSidebar}/>
        </div>
      </div>
    </div>
  );
}

export default Header;
