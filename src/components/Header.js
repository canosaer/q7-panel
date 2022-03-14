import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import projectData from '../store/projectData'


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
                    {projectData.map((project, i) => {
                        console.log('hi')
                        const key = `item--${i}`

                        return(
                            <li key={key} className="menu__item"><a href={project.url} target="_blank" className="menu__link">{project.name}</a></li>
                        )
                    })}
                </ul>
            </aside>
        </header>
    )
}