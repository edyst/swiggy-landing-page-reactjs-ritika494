import React from 'react'
import About from './About-section/About'

import CityList from './Cities-Section/CityList'
import './Footer.css'
import FooterBottom from './FooterBottom/FooterBottom'

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-lists">
                <About/>
                <CityList/>
                <FooterBottom/>

            </div>
        </div>
    )
}
