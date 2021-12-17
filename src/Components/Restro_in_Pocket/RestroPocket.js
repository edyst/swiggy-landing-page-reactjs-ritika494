import React from 'react'
import PocketImg from './PocketImg'
import './RestroPocket.css'
import StoreLink from './StoreLink'

export default function RestroPocket() {
    return (
        <div className="pocket-section">
            <div className="pocket-row">
                <div className="link-part"><StoreLink/></div>
                <div className="img-part"><PocketImg/></div>
            </div>
            
        </div>
    )
}
