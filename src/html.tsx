import React from "react";
import styled from "styled-components";

interface Props {
  body: string;
  bodyAttributes: object;
  headComponents: Array<any>;
  htmlAttributes: object;
  postBodyComponents: Array<any>;
  preBodyComponents: Array<any>;
}


export default function HTML<Props>({
  body,
  bodyAttributes,
  headComponents,
  htmlAttributes,
  postBodyComponents,
  preBodyComponents,
}) {
  return (
    <html {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {headComponents}
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: body }}
        />
        {postBodyComponents}
      </body>
    </html>
  );
}
