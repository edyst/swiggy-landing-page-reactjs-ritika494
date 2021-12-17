import React,{useState} from 'react'
import './NavForm.css'
import TextLoop from "react-text-loop"

export default function NavForm() {

    const [city,setCity]=useState('');

    const cityChange=(c)=>{
        console.log(c);
        setCity(c);
    }

    return (
        <div className="navform">
        <div className="nav-bar">
            <img alt="" src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png" className="svg"/>
            <div className="buttons">
            <a className="login">Login</a>
            <a className="sign-up">Sign Up</a>
            </div>

            </div>
            <h1 className="loop-h1">
                <TextLoop   springConfig={{ damping: 40 }} interval={3700}>
                <span className="Jumbo-h1">Game Night?         </span>
                <span className="Jumbo-h1">Unexpected Guests?</span>
                <span className="Jumbo-h1">Hungry?</span>
                <span className="Jumbo-h1">Cooking gone wrong?</span>
                <span className="Jumbo-h1">Movie marathon?</span>
                
                </TextLoop>
                </h1>
                <h2 className="_1E3AJ">Order food from favourite restaurants near you.</h2>
                <div className="form">
                    <input onChange={(event)=>{cityChange(event.target.value)}} className="form-input" type="text" placeholder="Enter your delivery location"></input>
                    <button className="form-button">Find Food</button>
                </div>
                <h3 className="navform-h3">Popular cities in India</h3>
                <ul className="navform-ul">
                    <li><a href="/ahmedabad" className="_3zoZ8">Ahmedabad</a></li>
                    <li><a href="/bangalore" className="_3zoZ8">Bangalore</a></li>
                    <li><a href="/chennai" className="_3zoZ8">Chennai</a></li>
                    <li><a href="/delhi" className="_3zoZ8">Delhi</a></li>
                    <li><a href="/gurgaon" className="_3zoZ8">Gurgaon</a></li>
                    <li><a href="/hyderabad" className="_3zoZ8">Hyderabad</a></li>
                    <li><a href="/kolkata" className="_3zoZ8">Kolkata</a></li>
                    <li><a href="/mumbai" className="_3zoZ8">Mumbai</a></li>
                    <li><a href="/pune" className="_3zoZ8">Pune</a></li>
                    <li><a href="#city-links" className="_3zoZ8"> &amp; more.</a></li></ul>
            
        </div>
    )
}
