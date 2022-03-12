import { useParams } from "react-router-dom";

export default function Body() {
  const { category } = useParams();
  return <div>{`This is ${category} component`}</div>;
}
