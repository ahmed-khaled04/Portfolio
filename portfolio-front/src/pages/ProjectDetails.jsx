import { useParams } from "react-router-dom";

export default function ProjectDetails() {
  const { slug } = useParams();
  return <div style={{ padding: 24 }}>Project: {slug}</div>;
}
