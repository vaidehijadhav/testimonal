import React from "react";
import reviews from "./data";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <div>
      <div>
        <h1>Our Testimonials</h1>
        <div></div>
        <Testimonial reviews={reviews}/>
      </div>
    </div>
  );
};

export default App;
