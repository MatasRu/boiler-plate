import React from "react";
import styled from "styled-components";
import Layout from "layout/MainLayout";


import StickyHeader from "./section/StickyHeader";
import Header from "./section/Header";
import PlanBenefits from "./section/PlanBenefits";
import ChoosePlan from "./section/ChoosePlan";
import Testimonials from "./section/Testimonials";


import {
  Icons,
  Button,
  PrimaryButton,
  SecondaryButton,
  Image,
  Container,
  ContainerSmall,
  FlexWrapper,
  GridWrapper,
  TextRegular,
  TextSmall,
  TextCaption,
  H1,
  H2,
  H3,
  TextBaseBold,
} from "components";

import { useQuery } from "styles/breakpoints";
import data from "utils/Data";

const Checkout = () => {
  const { isMobile, isTablet } = useQuery();

  return (
    <Layout>
      <StickyHeader />
      <Header />
      <Wrapper>
        <ContainerSmall>
          <TextSmall margin="0" textAlign="center">
            Over 52 147 plans ordered.
          </TextSmall>
          <H1 fontWeight={800} as="h1" textAlign="center">
            Get access to your yoga program now!
          </H1>
          <GridWrapper gridTemplateColumns="repeat(2,1fr)" gap="2rem">
            <ChoosePlan />
            <PlanBenefits />
          </GridWrapper>
        </ContainerSmall>
      </Wrapper>
      <Wrapper>
        <Container>
          <H3  margin="0 0 2rem" textAlign="center">Hear success stories from our clients</H3>
          {/* <Testimonials/> */}
        </Container>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  margin: 3rem 0;
`;

export default Checkout;
