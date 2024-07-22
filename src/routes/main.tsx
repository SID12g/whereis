import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Main() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/location");
  });
  return <></>;
}
