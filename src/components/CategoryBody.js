import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CategoryBody() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("featured");
  }, []);
  return <div>CategoryBody</div>;
}
