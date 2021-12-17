import React from 'react'
import Feature from './Feature';
import './Features.css'

 function Features() {

    const dataForFeature1={
        src:"https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf",
        width:"105px",
        height:"199px",
        heading:"No Minimum Order",
        desc:"Order in for yourself or for the group, with no restrictions on order value"
       }

    const dataForFeature2={
        src:"https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy",
        width:"112px",
        height:"206px",
        heading:" Live Order Tracking",
        desc:"Know where your order is at all times, from the restaurant to your doorstep"
    }

    const dataForFeature3={
        src:"https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn",
        width:"124",
        height:"188",
        heading:"Lightning-Fast Delivery",
        desc:"Experience Swiggy's superfast delivery for food delivered fresh & on time"
    }
    return (
            <div className="feature-section">
                <div className="features-row">
                <Feature data={dataForFeature1}/>
                <Feature data={dataForFeature2}/>
                <Feature data={dataForFeature3}/>
                </div>
            </div>
        
    )
}

export default Features;
