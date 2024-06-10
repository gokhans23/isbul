import React from "react";
import Header from "./components/Header";
import HelpSection from "./components/HelpSection";
import ContactForm from "./components/ContactForm";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <div className="divider"></div>
      <HelpSection />
      <ContactForm />
    </div>
  );
};

export default App;
