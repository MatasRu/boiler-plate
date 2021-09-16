import React from "react";
import styled from "styled-components";

import { useRouter } from "apis/history";

import { useQuery } from "styles/breakpoints";

import { Button, PrimaryButton, Image, H1, H2, H3, TextRegular } from "components";
import { Link } from "gatsby";
import { SecondaryButton } from "../../components/buttons/SecondaryButton";

const Landing = () => {
  const { isMobile, isTablet } = useQuery();
  const { goToLanding } = useRouter();

  return (
    <Wrapper>
      {isMobile && (
        <Button color="red" onClick={goToLanding}>
          Go To landing
        </Button>
      )}
      {isTablet && (
        <Link to="/home">
          <PrimaryButton>GO TO</PrimaryButton>
        </Link>
      )}
      <H1 as="h1" textAlign="center" textDecoration="underline">TESTING H1</H1>
      <H2 as="h2">TESTING H2</H2>
      <H3 as="h3">TESTING H3</H3>
      <TextRegular>lorem ipsum bla bla bla bla</TextRegular>
      <Button color="black">Button</Button>
      <PrimaryButton>Primary Button</PrimaryButton>
      <SecondaryButton>SECONDARY BUTTON</SecondaryButton>
      <Image src="laptopas" alt="laptopas" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 4em;
  background: papayawhip;
`;

export default Landing;
