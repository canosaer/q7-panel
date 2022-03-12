import React from 'react';
import profile from '../img/profile.jpg'

export default function Hero() {

    return(
        <section className="hero">
            <img className="hero__image" src={profile} alt="eric canosa headshot" />
            <h2 className="hero__heading">Eric Canosa</h2>
            <p className="hero__text">7th Quarter Creative Technologist</p>
        </section>
    )
}