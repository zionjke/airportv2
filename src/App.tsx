import React, {useEffect} from 'react';
import {Header} from "./components/Header";
import {FlightsList} from "./components/FlightsList";
import {Footer} from "./components/Footer";
import {useDispatch, useSelector} from "react-redux";
import {fetchAirlines, fetchAirports, fetchCities} from "./store/appReducer";


function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCities())
        dispatch(fetchAirlines())
        dispatch(fetchAirports())
    }, [])

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
