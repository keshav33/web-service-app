import React, { useEffect } from "react";
import "../../style/whyUs.css";
import WhyUsCard from "../shared/WhyUsCard";

const whyUs = [
    {
        title: "Reason 1",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, corrupti illum? Deleniti autem quam a molestias ab culpa fugit. Beatae facere earum ipsum necessitatibus modi officiis eius odio exercitationem sint."
    },
    {
        title: "Reason 2",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, corrupti illum? Deleniti autem quam a molestias ab culpa fugit. Beatae facere earum ipsum necessitatibus modi officiis eius odio exercitationem sint."
    },
    {
        title: "Reason 3",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, corrupti illum? Deleniti autem quam a molestias ab culpa fugit. Beatae facere earum ipsum necessitatibus modi officiis eius odio exercitationem sint."
    },
    {
        title: "Reason 4",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, corrupti illum? Deleniti autem quam a molestias ab culpa fugit. Beatae facere earum ipsum necessitatibus modi officiis eius odio exercitationem sint."
    },
    {
        title: "Reason 5",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, corrupti illum? Deleniti autem quam a molestias ab culpa fugit. Beatae facere earum ipsum necessitatibus modi officiis eius odio exercitationem sint."
    },
    {
        title: "Reason 6",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, corrupti illum? Deleniti autem quam a molestias ab culpa fugit. Beatae facere earum ipsum necessitatibus modi officiis eius odio exercitationem sint."
    }
]

const WhyUS = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("why-us-card-show");
                } else {
                    entry.target.classList.remove("why-us-card-show");
                }
            });
        });
        const hiddenWhyUSCards = document.querySelectorAll(
            ".why-us-card-hidden"
        );
        hiddenWhyUSCards.forEach((element) => observer.observe(element));
    }, []);
    return (
        <div className="alignCenter flexColumn" id="why-us">
            <div className="why-us-heading-conatiner">
                <h2 className="why-us-heading">Why Us?</h2>
            </div>
            <div className="why-us-cards-container">
                {
                    whyUs.map(whyUsDetails => {
                        return <WhyUsCard
                            title={whyUsDetails.title}
                            description={whyUsDetails.description}
                        />
                    })
                }
            </div>
        </div>
    );
};

export default WhyUS;
