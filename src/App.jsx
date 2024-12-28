import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  const [theme, setTheme] = useState("light"); // Default theme is 'light'

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`bg-gray-300 text-white pb-10 `}>
      <div className="container sm:w-[1200px] m-auto overflow-hidden">
      
        <div className={`h-fit-content w-full rounded-b-[50px] flex flex-col justify-between ${theme === "light" ? "bg-white border-4 border-white " : "bg-gray-700 border-4 border-white"}`}>
         
          <div className={`h-fit-content w-full rounded-b-[50px] ${theme === "light" ? "bg-gray-800 border-b-4 border-white" : "bg-white border-b-4 border-white"}`}>
            <Navbar theme={theme} toggleTheme={toggleTheme} />
              <Header theme={theme} />            
            <About theme={theme} />
          </div>
          <div className="h-[calc(fit-content-fit-content)] w-full">
            <Footer theme={theme} toggleTheme={toggleTheme}/>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default App;
