import React from "react";
import { Image, FlexWrapper } from "components";

function Header() {
  return (
    <FlexWrapper justifyContent="center" alignItems="center">
      <Image maxWidth="6rem" src="logo" />
    </FlexWrapper>
  );
}

export default Header;
