import { useState, useEffect } from "react";
import Loader from "./components/Loading/Loader";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/HeroSection/Hero";
import OurProducts from "./components/OurProducts/OurProducts";
import Contacts from "./components/Contacts/Contacts";

import "./App.sass";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <Hero />
      <OurProducts />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
