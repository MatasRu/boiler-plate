import React, { useEffect } from "react";
import LazyLoad, { forceVisible } from "react-lazyload";
import styled from "styled-components";

import { images } from "../../utils/Images";

interface Styles {
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  maxWidth?: string;
  maxHeight?: string;
  minWidth?: string;
}

interface Props extends Styles {
  src: string;
}

const Img = styled.img<Styles>`
  display: block;
  margin: ${({ margin }) => margin || ""};
  padding: ${({ padding }) => padding || ""};
  max-width: ${({ maxWidth }) => maxWidth || "200px"};
  width: ${({width}) => width || "100%"};
  height: ${({height}) => height || ""};
`;

export const Image: React.FC<Props> = ({ src, ...rest }) => {
  useEffect(() => {
    forceVisible();
  }, []);

  return !images[src] ? null : (
    <LazyLoad once>
      <picture>
        <Img src={images[src]} alt='' {...rest} />
      </picture>
    </LazyLoad>
  );
};
