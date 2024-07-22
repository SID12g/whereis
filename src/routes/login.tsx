import { css } from "@emotion/react";
import Wrap from "../components/wrap";
import Button from "../components/button";

/** @jsxImportSource @emotion/react */

export default function Login() {
  return (
    <Wrap>
      <p
        css={css`
          font-size: 24px;
          font-weight: 600;
          text-align: center;
        `}
      >
        Login
      </p>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingUsernameInput"
          placeholder="Username"
        />
        <label htmlFor="floatingInput">Username</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="floatingPasswordInput"
          placeholder="Password"
        />
        <label htmlFor="floatingInput">Password</label>
      </div>
      <Button>Login</Button>
    </Wrap>
  );
}
