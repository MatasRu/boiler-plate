import styled from "styled-components";

interface Styles {
  position?: string;
  margin?: string;
}

export const ContainerSmall = styled.div<Styles>`
  position: ${({ position }) => position || "relative"};
  display: block;
  margin: ${({ margin }) => margin || "auto"};
  padding: 0 1rem;
  max-width: 48rem;
`;
