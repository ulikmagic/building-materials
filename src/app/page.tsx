import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Catalog from "./components/Catalog";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Catalog />
      </main>
      <Footer />
    </>
  );
}
