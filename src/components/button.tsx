import React from "react";
import { css } from "@emotion/react";

/** @jsxImportSource @emotion/react */

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button
      css={css`
        width: 100%;
      `}
      type="submit"
      className="btn btn-primary"
    >
      {children}
    </button>
  );
}
