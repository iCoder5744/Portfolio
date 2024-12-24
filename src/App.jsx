import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';

const App = () => (
  <div className="bg-gray-300 text-white pb-10">
    <div className="container sm:w-[1200px] m-auto overflow-hidden">
      <Navbar />

      {/* Outer Div with height 210vh */}
      <div className="h-fit-content w-full bg-white rounded-b-[50px] flex flex-col justify-between">

        {/* Inner Div with height 150vh */}
        <div className="h-fit-content w-full bg-gray-800 rounded-b-[50px]">

          {/* Split Header and About Section */}
          <div >
            <Header />
          </div>
          <div>
            <About />
          </div>
        </div>

        {/* Footer (remaining height) */}
        <div className="h-[calc(fit-content-fit-content)] w-full">
          <Footer />
        </div>
      </div>
    </div>
  </div>
);

export default App;
