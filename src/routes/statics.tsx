import { css } from "@emotion/react";
import Navbar from "../components/navbar";
import Wrap from "../components/wrap";

/** @jsxImportSource @emotion/react */

export default function Statics() {
  const data = [
    { name: "1", number: "1", location: "1" },
    { name: "1", number: "1", location: "1" },
    { name: "1", number: "1", location: "1" },
  ];
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
        2학년 4반
      </p>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Number</th>
            <th scope="col">Name</th>
            <th scope="col">Location</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index}>
              <th scope="row">{user.number}</th>
              <td>{user.name}</td>
              <td>{user.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Wrap>
  );
}
