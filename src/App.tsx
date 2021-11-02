import React, {useEffect} from 'react';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {useDispatch} from "react-redux";
import {fetchAirlines, fetchAirports, fetchCities} from "./store/appReducer";
import {Route} from 'react-router-dom';
import {Arrival} from "./pages/Arrival";
import { Departure } from './pages/Departure';


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
                <Route exact path={'/arrival'} component={Arrival}/>
                <Route exact path={'/departure'} component={Departure}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
