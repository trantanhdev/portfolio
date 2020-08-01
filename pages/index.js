import Head from "next/head";

import Header from "../components/home/header";
import Navbar from "../components/home/navbar";
import About from "../components/home/about";
import Skill from "../components/home/skill";
import Footer from "../components/home/footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Anh Tran, Junior Web Developer</title>

        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
      </Head>

      <Header />

      <Navbar />

      <About />

      <Skill />

      <Footer />
    </div>
  );
}
