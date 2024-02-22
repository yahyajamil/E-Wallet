import React from 'react'

export default function Navlink({ title }) {
    return (
        <div className='nav-item'>
            <a href="/#" className="nav-links">{title}</a>
        </div>
    )
}
