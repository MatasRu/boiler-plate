import React from "react";
import { Image, FlexWrapper, H3, GridWrapper } from "components";
import { PlanBenefitsList } from "../elements/PlanBenefitsList";
import data from "utils/Data";

function PlanBenefits() {
  return (
    <FlexWrapper flexDirection="column">
      <H3>What's in my program?</H3>
      <GridWrapper as="ul" margin="0" padding="0" gridTemplateColumns="repeat(1, 1fr)" gap="1rem">
        {data.programInfo.map((item, index) => (
          <PlanBenefitsList
            as="li"
            key={index}
            benefitDescription={item.description}
            benefitTitle={item.title}
            benefitImg={item.image}
          />
        ))}
      </GridWrapper>
    </FlexWrapper>
  );
}

export default PlanBenefits;
