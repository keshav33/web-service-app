import React, { useEffect } from "react";
import "../../style/ourServices.css";
import OurServiceCard from "../shared/OurServiceCard";

const ourServices = [
    {
        title: "Service 1",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, corrupti illum? Deleniti autem quam a molestias ab culpa fugit. Beatae facere earum ipsum necessitatibus modi officiis eius odio exercitationem sint."
    },
    {
        title: "Service 2",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, corrupti illum? Deleniti autem quam a molestias ab culpa fugit. Beatae facere earum ipsum necessitatibus modi officiis eius odio exercitationem sint."
    },
    {
        title: "Service 3",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, corrupti illum? Deleniti autem quam a molestias ab culpa fugit. Beatae facere earum ipsum necessitatibus modi officiis eius odio exercitationem sint."
    },
    {
        title: "Service 4",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, corrupti illum? Deleniti autem quam a molestias ab culpa fugit. Beatae facere earum ipsum necessitatibus modi officiis eius odio exercitationem sint."
    }
]

const OurServices = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("our-services-card-show");
                } else {
                    entry.target.classList.remove("our-services-card-show");
                }
            });
        });
        const hiddenWhyUSCards = document.querySelectorAll(
            ".our-services-card-hidden"
        );
        hiddenWhyUSCards.forEach((element) => observer.observe(element));
    }, []);

    return (
        <div className="alignCenter flexColumn" id="our-services">
            <div className="our-services-heading-conatiner">
                <h2 className="our-services-heading">Our Services</h2>
            </div>
            <div className="our-services-cards-container">
                {
                    ourServices.map(serviceDetails => {
                        return <OurServiceCard
                            title={serviceDetails.title}
                            description={serviceDetails.description}
                        />
                    })
                }
            </div>
        </div>
    );
};

export default OurServices;
