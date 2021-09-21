import styled from "styled-components";
import { white, primary } from "../../styles/colors";

interface Styles {
  display?: string;
  margin?: string;
  padding?: string;
  maxWidth?: string;
  minWidth?: string;
  backgroundColor?: string;
  borderRadius?: string;
}

export const Button = styled.button<Styles>`
  display: ${({ display }) => display || "inline-block"};
  margin: ${({ margin }) => margin || "auto"};
  padding: ${({ padding }) => padding || "auto"};
  max-width: ${({ maxWidth }) => maxWidth || "auto"};
  min-width: ${({ minWidth }) => minWidth || "auto"};
  background-color: ${({ backgroundColor }) => backgroundColor || primary};
  border: none;
  border-radius: ${({ borderRadius }) => borderRadius || "0.5rem"};
  color: ${({ color }) => color || primary};
  cursor: pointer;
  &:hover {
    background-color: lightblue;
  }
`;
