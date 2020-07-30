import Head from "next/head";

import Header from "../components/home/header";
import About from "../components/home/about";
import Career from "../components/home/career";
import Footer from "../components/home/footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Anh Tran, Junior Web Developer</title>
      </Head>

      <Header />

      <About />

      <Career />

      <Footer />
    </div>
  );
}
