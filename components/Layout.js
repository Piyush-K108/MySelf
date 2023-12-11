import { Sora } from "@next/font/google";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";
import Header from "../components/Header";
import Head from "next/head";
import Cursor from "./cursor/cursor";
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/avatar.png" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"/>
        <title>Prashant Khanchandnai</title>
      </Head>
      <div
        className={`page bg-site text-white bg-cover   bg-no-repeat ${sora.variable} font-sora relative`}
      >
        <TopLeftImg />
        <Nav />
        <Cursor/>
       <Header/>
        {children}
      </div>
    </>
  );
};

export default Layout;
