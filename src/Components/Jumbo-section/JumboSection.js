import React from 'react'
import NavForm from './Form-nav/NavForm'
import ImagePart from './Image-part/ImagePart'
import './JumboSection.css'

export default function JumboSection() {
    return (
        <div className="jumbo-section">
            <div className="main-section">
                <NavForm/>
                <ImagePart/>
            </div>
        </div>
    )
}
