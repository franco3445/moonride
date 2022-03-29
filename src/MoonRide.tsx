import React, {useState} from 'react';
import PassengerForm from './PassengerForm'
import './Moonride.css';

function MoonRide() {
    return (
        <div className="Main">
            <link rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <div className="Moonride">
                <header className="MR-Header">
                    <h1 className="MR-Title">Book a trip</h1>
                    <p className="MR-Subtitle">An amazing journey is waiting for you and your loved ones! You’re just one step away from a new adventure:</p>
                    <PassengerForm/>
                    <br/>
                    <button className="Submit" type="submit" form="PassengerForm">Complete Your Booking</button>
                </header>
            </div>
            <img className="Background" src={require('./images/moon.jpg')}>
            </img>
        </div>
    );
}

export default MoonRide;
