import { css } from "@emotion/react";
import Wrap from "../components/wrap";
import Button from "../components/button";
import Navbar from "../components/navbar";
import { locations } from "../locations";

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
        defaultValue="checked"
        css={css`
          margin-bottom: 20px;
        `}
        className="form-select"
        aria-label="Default select example"
      >
        <option value="checked" disabled hidden>
          위치 선택
        </option>
        {locations.map((location, index) => (
          <option value={location.value} key={index}>
            {location.display} - {location.description}
          </option>
        ))}
      </select>
      <Button>위치 변경</Button>
    </Wrap>
  );
}
