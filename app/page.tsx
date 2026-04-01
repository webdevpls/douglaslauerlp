import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metodo from "@/components/Metodo";
import QuemSouEu from "@/components/QuemSouEu";
import Contato from "@/components/Contato";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AnimatedSection>
        <Metodo />
      </AnimatedSection>
      <AnimatedSection>
        <QuemSouEu />
      </AnimatedSection>
      <AnimatedSection>
        <Contato />
      </AnimatedSection>
      <AnimatedSection>
        <CtaSection />
      </AnimatedSection>
      <AnimatedSection>
        <Footer />
      </AnimatedSection>
    </main>
  );
}
