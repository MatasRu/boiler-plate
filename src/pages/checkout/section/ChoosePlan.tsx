import React from "react";
import { useState } from "react";
import styled from "styled-components";

import {
  FlexWrapper,
  H3,
  Button,
  TextCaption,
  Image,
  PrimaryButton,
  TextBaseBold,
} from "components";
import { PlanCard } from "../elements/PlanCard";

import data from "utils/Data";

const ChoosePlan: React.FC = () => {
  const [isSelectedBox, setSelectedBox] = useState([true, false, false]);

  const selectPlan = (index: number) => {
    let select = [...isSelectedBox];
    select.forEach((item, num) => {
      select[num] = false;
    });
    select[index] = true;
    setSelectedBox(select);
  };

  return (
    <FlexWrapper flexDirection="column">
      <H3>Choose your plan and get 7 days free trial</H3>
      {data.plans.map((item, index) => (
        <PlanCard
          key={index}
          price={item.price}
          discountPrice={12.33}
          planTitle={item.plan}
          isSelected={isSelectedBox[index]}
          onClick={() => selectPlan(index)}
        ></PlanCard>
      ))}
      <PrimaryButton margin="1rem 0.5rem" padding="0.75rem 2rem" maxWidth="22rem">
        <TextBaseBold color="white" margin="0.125rem 0">Get your plan</TextBaseBold>
      </PrimaryButton>
      <TextCaption textAlign="center">
        Your free trial will automatically become a paid subscription on the 8th
        day after you begin your trial. To cancel your subscription, please
        contact us at least 24 hours before the end of the trial period.
      </TextCaption>
      <TextCaption textAlign="center">
        By choosing a payment method you agree to the T&Cs and Privacy Policy
      </TextCaption>
      <Image margin="0 auto" maxWidth="15rem" src="safePayment" />
    </FlexWrapper>
  );
};

export default ChoosePlan;
