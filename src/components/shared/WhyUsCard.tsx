import React from "react";
import "../../style/whyUsCard.css";

type WhyUsCardProps = {
    title: string;
    description: string;
};

const WhyUsCard = ({
    title,
    description,
}: WhyUsCardProps) => {
    return (
        <div className="why-us-card why-us-card-hidden">
            <div className="why-us-card-content-title">{title}</div>
            <div className="why-us-card-content-description">{description}</div>
        </div>
    )
};

export default WhyUsCard;
