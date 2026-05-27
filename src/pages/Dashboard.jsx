import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Dashboard() {
  const [tasks, setTasks] = useLocalStorage("taskflow_data", []);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <h1>TaskFlow</h1>

      <TaskForm onAddTask={addTask} />

      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}