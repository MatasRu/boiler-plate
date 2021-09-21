import React from "react";
import { useState } from "react";
import styled from "styled-components";

import {
  H2,
  H5,
  FlexWrapper,
  TextSmall,
  TextRegular,
  Image,
  Icons,
  TextCaption,
} from "components";
import { grey, primary } from "styles/colors";

type Props = {
  benefitTitle: string;
  benefitDescription: string;
  benefitImg: string;
  as: string;
};

export const PlanBenefitsList: React.FC<Props> = ({
  benefitTitle,
  benefitDescription,
  benefitImg,
  as,
}) => {
  return (
    <PlanBenefitsWrapper>
      <FlexWrapper>
        <Svg src={benefitImg} />
        <FlexWrapper flexDirection="column">
          <H5 margin="0">{benefitTitle} </H5>
          <TextCaption margin="0">{benefitDescription}</TextCaption>
        </FlexWrapper>
      </FlexWrapper>
    </PlanBenefitsWrapper>
  );
};

const PlanBenefitsWrapper = styled.li`
  list-style-type: none;
`;
const Svg = styled.img`
  width: 3rem;
  height: 3rem;
  margin: 0 1rem 0 0;

`;
