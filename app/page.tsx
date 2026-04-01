import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metodo from "@/components/Metodo";
import QuemSouEu from "@/components/QuemSouEu";
import Contato from "@/components/Contato";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Metodo />
      <QuemSouEu />
      <Contato />
      <CtaSection />
      <Footer />
    </main>
  );
}
