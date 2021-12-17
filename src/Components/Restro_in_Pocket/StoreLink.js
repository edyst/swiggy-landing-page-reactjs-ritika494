import React from 'react'
import './StoreLink.css'

export default function StoreLink() {
    return (
        <div className="storelink">
            <div className="pocket-heading">Restaurants in your pocket</div>
            <div className="pocket-desc">Order from your favorite restaurants &amp; track on the go, with the all-new Swiggy app.</div>
            <div><a href="https://play.google.com/store/apps/details?id=in.swiggy.android" target="_blank" rel="noopener noreferrer">
                <img alt="" className="_12dJy" height="54" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp"/></a>
                <a href="https://itunes.apple.com/in/app/swiggy-food-order-delivery/id989540920" target="_blank" rel="noopener noreferrer">
                <img alt="" className="_37Cft" height="54" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty"/></a></div>
        </div>
    )
}
