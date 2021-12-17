import React from 'react'
import './About.css'
import List from '../List-template/List'
import StoreLink2 from '../Store-link2/StoreLink2'

const dataForCompanyList={

    heading:"COMPANY",
    items:[{name:"About us",
            link:"/about"},
            {name:"Team",
             link:"/team"},
             {name:"Careers",
            link:"/careers"},
            {name:"Swiggy Blog",
             link:"https://blog.swiggy.com"},
             {name:"Bug Bounty",
            link:"/bug-bounty"},
            {name:"Swiggy Super",
             link:"/swiggy-super"},
             {name:"Swiggy Corporate",
            link:"https://corporate.swiggy.com"},
            {name:"Swiggy Instamart",
            link:"/swiggy-instamart"}]
}

const dataForContactList={
    heading:"CONTACT",
    items:[
            {name:"Help & Support",
             link:"/support"},
             {name:"Partner with us",
            link:"https://partner-with-us.swiggy.com/onboard#/swiggy"},
            {name:"Ride with us",
             link:"https://ride.swiggy.com/"}
             ]

}

const dataForLegalList={
    heading:"Legal",
    items:[
            {name:"Terms & Conditions",
             link:"https://www.swiggy.com/terms-and-conditions"},
             {name:"Refund & Cancellation",
            link:"https://www.swiggy.com/refund-policy"},
            {name:"Privacy Policy",
             link:"https://www.swiggy.com/privacy-policy"},
             {name:"Cookie Policy",
             link:"https://www.swiggy.com/cookie-policy"},
             {name:"Offer Terms",
             link:"https://www.swiggy.com/offer-terms"},
             {name:"Phishing & Fraud",
             link:"https://www.swiggy.com/beware-of-phishing-and-fraud"}
             ]

}


export default function About() {
    return (
        <div className="about">
            <List data={dataForCompanyList}/>
            <List data={dataForContactList}/>
            <List data={dataForLegalList}/>
            <StoreLink2/>

            
        </div>
    )
}
