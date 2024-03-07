import React from "react";
import Card from "./Card";

const Testimonial = (props) => {
    let reviews = props.reviews;
    return(
        <Card review={reviews[0]}></Card>
    );
};

export default Testimonial;