import React from "react";
import "../../style/ourServicesCard.css";
import { useNavigate } from "react-router-dom";

type OurServiceCardProps = {
    title: string;
    description: string;
};

const OurServiceCard = ({
    title,
    description,
}: OurServiceCardProps) => {
    const navigate = useNavigate();
    return (
        <div className="our-services-card our-services-card-hidden">
            <div className="flexColumnCenter">
                <div className="our-services-card-content-title">{title}</div>
                <div className="our-services-card-content-description">{description}</div>
            </div>
            <div className="flexColumnCenter marginBottom40">
                <button className="our-services-card-pricing-button" onClick={() => navigate("/pricing")}>Get Pricing</button>
            </div>
        </div>
    )
};

export default OurServiceCard;
