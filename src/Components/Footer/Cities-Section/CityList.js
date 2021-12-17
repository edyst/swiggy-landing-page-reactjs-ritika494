import React from 'react'
import './CityList.css'
import CityListFile from "./CityListFile.json"

export default function CityList() {
    return (
        <div className="citylist">
            <div className="footer-list-heading">WE DELIVER To</div>
            <ul className="footer-list-ul">
             {CityListFile.map(city=>{
                 return (<li><a href=""> {city}</a></li>)
             })}

             </ul>
        </div>
    )
}
