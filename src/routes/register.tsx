import { css } from "@emotion/react";
import Wrap from "../components/wrap";
import Button from "../components/button";
import axios from "axios";
import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router";

/** @jsxImportSource @emotion/react */

export default function Register() {
  const navigate = useNavigate();
  const gradeOptions = [1, 2, 3];
  const classroomOptions = [1, 2, 3, 4, 5, 6];
  const numberOptions = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
  ];

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    grade: "",
    classroom: "",
    number: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth/register", formData);
      if (response.status === 200) {
        navigate("/login");
        console.log(response);
      } else {
        console.log("error111");
      }
    } catch (error) {
      console.error("error:", error);
    }
  };

  return (
    <Wrap>
      <p
        css={css`
          font-size: 24px;
          font-weight: 600;
          text-align: center;
        `}
      >
        회원가입
      </p>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="사용자 이름"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="비밀번호"
            aria-label="Password"
            aria-describedby="basic-addon1"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <select
          className="form-select"
          aria-label="Default select example"
          name="grade"
          value={formData.grade}
          onChange={handleChange}
        >
          <option value="" disabled hidden>
            학년
          </option>
          {gradeOptions.map((grade, index) => (
            <option key={index} value={grade}>
              {grade}학년
            </option>
          ))}
        </select>
        <select
          css={css`
            margin-top: 20px;
          `}
          name="classroom"
          value={formData.classroom}
          onChange={handleChange}
          className="form-select"
          aria-label="Default select example"
        >
          <option value="" disabled hidden>
            반
          </option>
          {classroomOptions.map((classroom, index) => (
            <option key={index} value={classroom}>
              {classroom}반
            </option>
          ))}
        </select>
        <select
          css={css`
            margin-top: 20px;
            margin-bottom: 20px;
          `}
          name="number"
          value={formData.number}
          onChange={handleChange}
          className="form-select"
          aria-label="Default select example"
        >
          <option value="" disabled hidden>
            번호
          </option>
          {numberOptions.map((number, index) => (
            <option key={index} value={number}>
              {number}번
            </option>
          ))}
        </select>

        <Button>회원가입</Button>
      </form>
    </Wrap>
  );
}
