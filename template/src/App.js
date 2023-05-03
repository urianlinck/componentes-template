
import React from "react";
import "./App.css";
import Garagem from "./components/Garagem";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  

  return (
    <div className="App">
      <Header/>
     <h1>Aula - Componentes React</h1>
     <Garagem/>
     <Footer/>
    </div>
  );
}
