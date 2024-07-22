import React from "react";
import { css } from "@emotion/react";

/** @jsxImportSource @emotion/react */

export default function Wrap({ children }: { children: React.ReactNode }) {
  return (
    <div
      css={css`
        width: 400px;
        @media (max-width: 500px) {
          width: calc(100% - 40px);
          margin: 0 20px;
        }
      `}
    >
      {children}
    </div>
  );
}
