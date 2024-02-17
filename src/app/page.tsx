import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Catalog from "./components/Catalog";
import { NextPage } from "next";
import Hero from "./components/Hero";

const Home: NextPage = () => (
  <>
    <Header />
    <main className="flex-grow">
      <Hero />
      <Catalog />
    </main>
    <Footer />
  </>
);

export default Home