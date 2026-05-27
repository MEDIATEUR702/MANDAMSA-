import { useState } from "react";

export default function TaskForm({ onAddTask }) {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [statut, setStatut] = useState("A faire");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      titre,
      description,
      statut,
    };

    onAddTask(newTask);

    setTitre("");
    setDescription("");
    setStatut("A faire");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Titre"
        value={titre}
        onChange={(e) => setTitre(e.target.value)}
      />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select
        value={statut}
        onChange={(e) => setStatut(e.target.value)}
      >
        <option>A faire</option>
        <option>En cours</option>
        <option>Termine</option>
      </select>

      <button type="submit">Ajouter</button>
    </form>
  );
}