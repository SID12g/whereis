import { css } from "@emotion/react";
import Wrap from "../components/wrap";
import Button from "../components/button";

/** @jsxImportSource @emotion/react */

export default function Register() {
  const grade = [1, 2, 3];
  const classroom = [1, 2, 3, 4, 5, 6];
  const number = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
  ];
  return (
    <Wrap>
      <p
        css={css`
          font-size: 24px;
          font-weight: 600;
          text-align: center;
        `}
      >
        Register
      </p>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          aria-label="Password"
          aria-describedby="basic-addon1"
        />
      </div>
      <select className="form-select" aria-label="Default select example">
        <option value="checked" disabled hidden>
          학년
        </option>
        {grade.map((grade, index) => (
          <option key={index} value={grade}>
            {grade} 학년
          </option>
        ))}
      </select>
      <select
        css={css`
          margin-top: 20px;
        `}
        className="form-select"
        aria-label="Default select example"
      >
        <option value="checked" disabled hidden>
          반
        </option>
        {classroom.map((classroom, index) => (
          <option key={index} value={classroom}>
            {classroom} 반
          </option>
        ))}
      </select>
      <select
        css={css`
          margin-top: 20px;
          margin-bottom: 20px;
        `}
        className="form-select"
        aria-label="Default select example"
      >
        <option value="checked" disabled hidden>
          번호
        </option>
        {number.map((number, index) => (
          <option key={index} value={number}>
            {number} 번
          </option>
        ))}
      </select>
      <Button>Register</Button>
    </Wrap>
  );
}
