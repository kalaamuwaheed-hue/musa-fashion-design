import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import WhyChoose from "./components/WhyChoose";
import HowToOrder from "./components/HowToOrder";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFab from "./components/WhatsAppFab";

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:tracking-wide focus:text-gold"
      >
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <WhyChoose />
        <HowToOrder />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}
