import styled from "styled-components";

import { grey } from "styles/colors";

interface Styles {
  margin?: string;
  fontSize?: string;
  fontWeight?: number;
  fontFamily?: string;
  textAlign?: string;
  textDecoration?: string;
  textTransform?: string;
  color?: string;
}

export const TextBase = styled.p<Styles>`
  margin: ${({ margin }) => margin || ""};
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  font-family: ${({fontFamily}) => fontFamily || "Helvetica"};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  color: ${({ color }) => color || grey};
  text-align: ${({ textAlign }) => textAlign || ""};
  text-decoration: ${({ textDecoration }) => textDecoration || ""};
  text-transform: ${({ textTransform }) => textTransform || ""};
`;

export const TextBaseBold = styled(TextBase).attrs(({fontWeight}: Styles) => ({
  fontWeight: fontWeight || 700
}))``;
