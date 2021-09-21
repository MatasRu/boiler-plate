import styled from "styled-components";

interface Styles {
  gridTemplateColumns?: string;
  gap?: string;
  margin?: string;
  padding?: string;
}

export const GridWrapper = styled.div<Styles>`
  display: grid;
  grid-template-columns: ${({ gridTemplateColumns }) =>
    gridTemplateColumns || ""};
  gap: ${({ gap }) => gap || ""};
  margin: ${({ margin }) => margin || ""};
  padding: ${({ padding }) => padding || ""};
`;
