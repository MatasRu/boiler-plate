import styled from "styled-components";
import { white } from "../../styles/colors";

export const Button = styled.button`
  display: ${(props) => props.display || "inline-block"};
  margin: ${(props) => props.margin || "auto"};
  padding: ${(props) => props.padding || "auto"};
  max-width: ${(props) => props.maxWidth || "auto"};
  min-width: ${(props) => props.minWidth || "auto"};
  background-color: ${(props) => props.backgroundColor || "transparent"};
  border: none;
  border-radius: ${(props) => props.borderRadius || "0.5rem"};
  color: ${(props) => props.color || white};
  cursor: pointer;
  &:hover {
    background-color: lightblue;
  }
`;
