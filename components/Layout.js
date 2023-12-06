import { Sora } from "@next/font/google";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";
import Header from "../components/Header";
import Head from "next/head";
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
      <link href="https://unpkg.com/cloudinary-video-player@1.10.2/dist/cld-video-player.min.css" rel="stylesheet"/>
      <title>Prashant Khanchandnai</title>
      <script src="https://unpkg.com/cloudinary-video-player@1.10.2/dist/cld-video-player.min.js" 
    type="text/javascript"></script>
      </Head>
      <div
        className={`page bg-site text-white bg-cover   bg-no-repeat ${sora.variable} font-sora relative`}
      >
        <TopLeftImg />
        <Nav />
        <Header />
        {children}
      </div>
    </>
  );
};

export default Layout;
