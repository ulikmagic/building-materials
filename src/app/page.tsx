import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Catalog from "./components/Catalog/Catalog";
import { NextPage } from "next";

const Home: NextPage = () => (
  <>
    <Header />
    <main className="flex-grow">
      <Catalog />
    </main>
    <Footer />
  </>
);

export default Home