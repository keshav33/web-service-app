import React from "react";
import "../../style/pricingCard.css";
import { useNavigate } from "react-router-dom";

type PricingCardProps = {
    title: string;
    description: string;
};

const PricingCard = ({
    title,
    description,
}: PricingCardProps) => {
    const navigate = useNavigate();
    return (
        <div className="pricing-card">
            <div className="flexColumnCenter">
                <div className="pricing-card-content-title">{title}</div>
                <div className="pricing-card-content-description">{description}</div>
            </div>
            <div className="flexColumnCenter marginBottom40">
                <button className="contact-us-button" onClick={() => navigate("/contact-us")}>Contact Us</button>
            </div>
        </div>
    )
};

export default PricingCard;
