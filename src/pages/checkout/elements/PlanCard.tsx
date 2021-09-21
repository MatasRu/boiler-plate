import React from "react";
import { useState } from "react";
import styled from "styled-components";

import { H2, H5, FlexWrapper, TextSmall, TextRegular } from "components";
import { grey, primary } from "styles/colors";

type Props = {
  price: string;
  discountPrice: number;
  planTitle: string;
  isSelected: boolean;
  onClick: () => void;
};

export const PlanCard: React.FC<Props> = ({
  price,
  discountPrice,
  planTitle,
  isSelected,
  onClick,
}) => {
  return (
    <CardWrapper onClick={() => onClick()} isSelected={isSelected}>
      <H5 margin="0">{planTitle} </H5>
      <FlexWrapper alignItems="center">
        <H2 margin="0">{price}</H2>
        <TextRegular margin="0 0.5rem">/ month</TextRegular>
      </FlexWrapper>
      <FlexWrapper>
        <TextSmall margin="0">asfsaf </TextSmall>
      </FlexWrapper>
    </CardWrapper>
  );
};

const CardWrapper = styled.div<{ isSelected: boolean }>`
  padding: 1rem;
  margin: 0.5rem;
  cursor: pointer;
  border-radius: 1rem;
  border: 0.125rem solid ${({ isSelected }) => (isSelected ? primary : grey)};
`;
