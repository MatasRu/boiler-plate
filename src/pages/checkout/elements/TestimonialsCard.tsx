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
  testimonialName: string;
  testimonialCity: string;
  testimonialRating: number;
  testimonialImg: string;
  testimonialDescription: string;
};

export const TestimonialsCard: React.FC<Props> = ({
  testimonialName,
  testimonialCity,
  testimonialRating,
  testimonialImg,
  testimonialDescription,
}) => {
  return (
      <FlexWrapper flexDirection="column">
        <H5>{testimonialName}</H5>
        <TextSmall>{testimonialCity}</TextSmall>
        <FlexWrapper>
          <Image src="starImg">{testimonialRating}</Image>
        </FlexWrapper>
        <Image src={testimonialImg} />
        <TextRegular>{testimonialDescription}</TextRegular>
      </FlexWrapper>
  );
};

