import React from "react";
import "../../style/pricing.css"
import PricingCard from "../shared/PricingCard";

const pricing = [
    {
        title: "Standard",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, corrupti illum? Deleniti autem quam a molestias ab culpa fugit. Beatae facere earum ipsum necessitatibus modi officiis eius odio exercitationem sint."
    },
    {
        title: "Pro",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, corrupti illum? Deleniti autem quam a molestias ab culpa fugit. Beatae facere earum ipsum necessitatibus modi officiis eius odio exercitationem sint."
    },
    {
        title: "Enterprise",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, corrupti illum? Deleniti autem quam a molestias ab culpa fugit. Beatae facere earum ipsum necessitatibus modi officiis eius odio exercitationem sint."
    }
]

const Pricing = () => {

    return (
        <div className="pricing-container alignCenter flexColumn" id="pricing">
            <div className="pricing-heading-conatiner">
                <h2 className="pricing-heading">Pricing Details</h2>
            </div>
            <div className="pricing-cards-container">
                {
                    pricing.map(pricingDetails => {
                        return <PricingCard
                            title={pricingDetails.title}
                            description={pricingDetails.description}
                        />
                    })
                }
            </div>
        </div>
    );
};

export default Pricing;
