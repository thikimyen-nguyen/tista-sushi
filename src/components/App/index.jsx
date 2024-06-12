import { Layout } from "../Layout";
import { Routes, Route } from "react-router-dom";
import { ContactForm } from "../ContactForm";
import { Cover } from "../Cover";
import CheckoutSuccess from "../CheckoutMessage";

function HomePage() {
  return <Cover />;
}
function ContactPage() {
  return <ContactForm />;
}

function AboutPage() {
  return <CheckoutSuccess />;
}


function App() {
  return (
    <div className="bg-black">
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
