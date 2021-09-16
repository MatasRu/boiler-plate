import styled from "styled-components";

import { Button } from "../buttons/Button";
import { mainColor } from "../../styles/colors";

export const PrimaryButton = styled(Button)`
  background-color: ${mainColor};
  border: 1px solid red;
  border-radius: 50px;
  width: 200px;
`;
