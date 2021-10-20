import React from 'react';
import {Header} from "./components/Header";
import {FlightsList} from "./components/FlightsList";
import {Footer} from "./components/Footer";

function App() {
  return (
    <div>
        <div className="container">
            <Header/>
            <FlightsList/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
