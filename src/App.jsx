import TaskForm from "./components/TaskForm";
import TaskFilter from "./components/TaskFilter";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div>
      <h1>Lista de Tarefas</h1>

      <TaskForm />
      <TaskFilter />
      <TaskList />
    </div>
  );
}

export default App;