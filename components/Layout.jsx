import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="layout">
      <Head>
        <title>Sormorchea</title>
        <link rel="icon" href="/android-chrome-maskable-512x512.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#df517c" />
      </Head>
      <header>
        <Header />
      </header>
      <main className="">{children}</main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
