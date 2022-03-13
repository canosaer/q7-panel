import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Header() {
    const [menuOpen, setMenuOpen ] = useState(false);

    const sidebarStyles = menuOpen ? 'menu menu_open' : 'menu'
    const dimmerStyles = menuOpen ? 'dimmer dimmer_open' : 'dimmer'

    return(
        <header className="header">

            <h1 className="header__heading">Q7 Panel</h1>
            <div className={dimmerStyles}></div>
            <button className="toggle" onClick={() => setMenuOpen(!menuOpen)}><FontAwesomeIcon className="toggle__bars" icon="bars" /></button>

            <aside className={sidebarStyles}>
                <ul className="menu__list">
                    <li className="menu__item"><a href="#" className="menu__link">Movie Database</a></li>
                    <li className="menu__item"><a href="#" className="menu__link">Game Store</a></li>
                    <li className="menu__item"><a href="#" className="menu__link">Enemy Space</a></li>
                    <li className="menu__item"><a href="#" className="menu__link">Landscape Letters</a></li>
                </ul>
            </aside>
        </header>
    )
}