import { useParams } from "react-router-dom";

export default function TaskDetail() {
  const { id } = useParams();

  const tasks =
    JSON.parse(localStorage.getItem("taskflow_data")) || [];

  const task = tasks.find((t) => t.id == id);

  if (!task) {
    return <h1>Tache introuvable</h1>;
  }

  return (
    <div>
      <h1>{task.titre}</h1>

      <p>{task.description}</p>

      <h3>{task.statut}</h3>
    </div>
  );
}