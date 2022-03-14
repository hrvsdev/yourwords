import { useParams } from "react-router-dom";

export default function Other() {
  const { other } = useParams();
  const otherArray = ["contact", "follow", "privacy-policy", "terms-of-use"];
  if (otherArray.includes(other)) {
    console.log("op");
  }
  return <div>Other</div>;
}
