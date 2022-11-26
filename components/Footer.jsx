import React from "react";
import styles from "../styles/Footer.module.css";
import {
  EnvelopeFill,
  Facebook,
  GeoAltFill,
  Instagram,
  TelephoneFill,
  Whatsapp,
  Youtube,
} from "react-bootstrap-icons";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__wrapper}>
          <div className={styles.footer__contactUs}>
            <div className={styles.contactUs}>
              <p className={styles.contact__title}>Contact Us</p>
              <div className={styles.ourContacts}>
                <a
                  target="blank"
                  href="https://api.whatsapp.com/send?phone=233543653034"
                  className={styles.contact__option}
                  aria-label="Whatsapp"
                >
                  <Whatsapp className={styles.contacts__icon} />
                  <p>Whatsapp</p>
                </a>
                <a
                  aria-label="Telephone"
                  href="tel:+233595631886"
                  className={styles.contact__option}
                >
                  <TelephoneFill className={styles.contacts__icon} />
                  <p> +447540974420</p>
                </a>
                <a
                  aria-label="Telephone"
                  href="tel:+233595631886"
                  className={styles.contact__option}
                >
                  <TelephoneFill className={styles.contacts__icon} />
                  <p>+233559737800</p>
                </a>

                <a
                  href="mailto: sormorchea@gmail.com"
                  aria-label="Email"
                  className={styles.contact__option}
                >
                  <EnvelopeFill className={styles.contacts__icon} />
                  <p> sormorchea@gmail.com </p>
                </a>
                <a
                  aria-label="location"
                  target="blank"
                  href="https://goo.gl/maps/5YtdZYvJo7zXmkkq7"
                  className={styles.contact__option}
                >
                  <GeoAltFill className={styles.contacts__icon} />
                  <p>Brodi, Bono Region, Ghana </p>
                </a>
              </div>
            </div>
          </div>

          <div className={styles.quick}>
            <p className={styles.title}>Quick links</p>
            <div className={styles.quick__links}>
              <Link href="/">Home</Link>
              <Link href="/contact">Contacts</Link>
              <Link href="/about">About us</Link>
            </div>
          </div>
        </div>
        <div className={styles.footer__followUs}>
          <h1>Sormorchea</h1>
          <div className={styles.footer__followUsOption}>
            <Facebook className={styles.footer__followUsIcon} />
            <Instagram className={styles.footer__followUsIcon} />
            <Youtube className={styles.footer__followUsIcon} />
          </div>
        </div>
      </div>

   <div className={styles.bottom}>
    <div className={styles.developer}>
        <p>Design and developed by Gyaso LLC</p>
        <p>sahtitus58@gmail.com</p>
    </div>
   <div className={styles.footer__copyright}>
        <p>©️ 2022 Sormorchea Royal Enterprise. All rights reserved.</p>
      </div>
   </div>
    </div>
  );
}

export default Footer;
