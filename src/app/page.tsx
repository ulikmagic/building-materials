import Catalog from "./components/Catalog";
import { NextPage } from "next";
import Hero from "./components/Hero";

const Home: NextPage = () => (
  <main className="flex-grow">
    <Hero />
    <Catalog />
  </main>
);

export default Home
