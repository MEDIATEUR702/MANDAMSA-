import { Link } from "react-router-dom";

export default function TaskCard({ task }) {
  return (
    <Link to={`/task/${task.id}`}>
      <div>
        <h2>{task.titre}</h2>
        <p>{task.description}</p>
        <small>{task.statut}</small>
      </div>
    </Link>
  );
}