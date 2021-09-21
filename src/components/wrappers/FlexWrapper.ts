import styled from "styled-components";

interface Styles {
  backgroundColor?: string
  alignItems?: string;
  justifyContent?: string;
  margin?: string;
  padding?: string;
  flexDirection?: string;
  flexWrap?: string;
}

export const FlexWrapper = styled.div<Styles>`
  display: flex;
  background-color: ${({ backgroundColor})=> backgroundColor || ""};
  align-items: ${({ alignItems }) => alignItems || ""};
  justify-content: ${({ justifyContent }) => justifyContent || ""};
  margin: ${({ margin }) => margin || ""};
  padding: ${({ padding }) => padding || ""};
  flex-direction: ${({ flexDirection }) => flexDirection || ""};
  flex-wrap: ${({ flexWrap }) => flexWrap || ""};
`;
