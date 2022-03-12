import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Header() {
    const [menuOpen, setMenuOpen ] = useState(false);

    const sidebarStyles = menuOpen ? 'sidebar sidebar--open' : 'sidebar'
    const overlayStyles = menuOpen ? 'overlay overlay--open' : 'overlay'

    return(
        <header className="header">
            <button className="toggle" onClick={() => setMenuOpen(!menuOpen)}><FontAwesomeIcon className="toggle__bars" icon="bars" /></button>

            <h1 className="header__heading">Q7 Panel</h1>

            <aside className={sidebarStyles}>
                <ul className="sidebar__list">
                    <li className="sidebar__item"><a href="#" className="sidebar__link">Movie Database</a></li>
                    <li className="sidebar__item"><a href="#" className="sidebar__link">Game Store</a></li>
                    <li className="sidebar__item"><a href="#" className="sidebar__link">Enemy Space</a></li>
                    <li className="sidebar__item"><a href="#" className="sidebar__link">Landscape Letters</a></li>
                </ul>
            </aside>

            <div className={overlayStyles} onClick={() => setMenuOpen(!menuOpen)}></div>
        </header>
    )
}