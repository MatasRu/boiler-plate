import React from "react";

import { FlexWrapper, GridWrapper, H5, TextSmall } from "components";
import { TestimonialsCard } from "../elements/TestimonialsCard";

import data from "utils/Data";

function Testimonials() {
  return (
    <GridWrapper gridTemplateColumns="repeat(3, 1fr)" gap="1rem">
      {data.testimonials.map((item, index) => (
        <TestimonialsCard key={index}
          testimonialName={item.name}
          testimonialCity={item.city}
          testimonialRating={item.rating}
          testimonialImg={item.image}
          testimonialDescription={item.description}
        />
      ))}
    </GridWrapper>
  );
}

export default Testimonials;
