import React from "react";
import styles from "../styles/Sidebar.module.css";
import Link from "next/link";
import { IconButton } from "@mui/material";
import { Clear } from "@mui/icons-material";

const Sidebar = ({ close }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.closeBtn}>
        <IconButton
          className={styles.closeBtn__wrapper}
          aria-label="close-sidebar"
          onClick={close}
        >
          <Clear className={styles.close} />
        </IconButton>
      </div>

      <div className={styles.sidebar__bottom}>
        <Link href="/" className={styles.sidebar__bottomOption}>
          <span>Home</span>
        </Link>
        <Link href="/contact" className={styles.sidebar__bottomOption}>
          <span>Contact</span>
        </Link>
        <Link href="/about" className={styles.sidebar__bottomOption}>
          <span>About us</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
