import React from 'react'
import Navlink from './Navlink'
import Navtitle from './Navtitle'
import './Nav.css'

export default function Navbar() {
    const navLinks = ['Top.component', 'Card.component', 'CardStack.component', 'Top.component', 'Card.component', 'CardForm.component']

    const firstSet = navLinks.slice(0, 3);
    const secondSet = navLinks.slice(3);

    return (
        <nav>
            <h2>Views & Components</h2>
            <p>App.component</p>
            <div className="nav-container">
                <Navtitle title={'Home.Component'} />
                {firstSet.map((title, index) => {
                    return <Navlink key={index} title={title} />
                })}
                <Navtitle title={'AddCart.Component'} />
                {secondSet.map((title, index) => {
                    return <Navlink key={index + 3} title={title} />
                })}
            </div>
        </nav>
    )
}
