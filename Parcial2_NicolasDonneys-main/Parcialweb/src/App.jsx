import Header from "./components/Header";
import Profile from './components/Profile';
import Skills from './components/Skills';
import Project from "./components/Project";
import React from "react";



import './App.css'; // Si tienes estilos


const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Profile />
        <Skills />
        <Project />
      </div>
    </div>
  );
};


export default App;
