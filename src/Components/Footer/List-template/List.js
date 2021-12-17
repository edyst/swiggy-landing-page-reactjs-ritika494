import React from 'react'
import './List.css'

export default function List(props) {
    return (
        <div className="footer-part">
            <div className="footer-list-heading">{props.data.heading}</div>
                <ul className="footer-list-ul">
                    {props.data.items.map((li)=>{
                       return  (<li><a href={li.link}  target="_blank">{li.name}</a></li>)
                    })}
                </ul>
            
            
        </div>
    )
}
