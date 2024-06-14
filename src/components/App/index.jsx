import { Layout } from "../Layout";
import { Routes, Route } from "react-router-dom";
import { ContactForm } from "../ContactForm";
import CheckoutSuccess from "../CheckoutMessage";
import HomePageContent from "../HomePage";
import { useEffect } from "react";

function HomePage() {
  return <HomePageContent />;
}
function ContactPage() {
  return <ContactForm />;
}

function AboutPage() {
  return <CheckoutSuccess />;
}


function App() {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll('.animate-on-scroll').forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          element.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="bg-black ">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="checkoutSuccess" element={<AboutPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
