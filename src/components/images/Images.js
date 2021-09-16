import React, { useEffect } from "react";
import LazyLoad, { forceVisible } from "react-lazyload";
import styled from "styled-components";

import { images } from "../../utils/Images";

const Img = styled.img`
  display: block;
  margin: ${(props) => props.margin || ""};
  padding: ${(props) => props.padding || ""};
  max-width: ${(props) => props.maxWidth || "200px"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || ""};
`;

export const Image = ({ src }) => {
  useEffect(() => {
    forceVisible();
  }, []);

  return !images[src] ? null : (
    <LazyLoad once>
      <picture>
        <Img src={images[src]} />
      </picture>
    </LazyLoad>
  );
};
