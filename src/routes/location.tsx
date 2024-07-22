import { css } from "@emotion/react";
import Wrap from "../components/wrap";
import Button from "../components/button";
import Navbar from "../components/navbar";

/** @jsxImportSource @emotion/react */

export default function Location() {
  return (
    <Wrap>
      <Navbar />
      <p
        css={css`
          font-size: 20px;
          font-weight: 500;
          text-align: center;
        `}
      >
        현재 위치 : 교실
      </p>
      <select
        css={css`
          margin-bottom: 20px;
        `}
        className="form-select"
        aria-label="Default select example"
      >
        <option selected>현재 위치</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <Button>위치 변경</Button>
    </Wrap>
  );
}
