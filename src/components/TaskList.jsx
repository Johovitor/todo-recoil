import { useRecoilState, useRecoilValue } from "recoil";
import { taskListState } from "../atoms/taskAtom";
import { filteredTaskListState } from "../selectors/taskSelector";

function TaskList() {
  const filteredTasks = useRecoilValue(filteredTaskListState);
  const [tasks, setTasks] = useRecoilState(taskListState);

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );

    setTasks(updatedTasks);
  };

  const removeTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="task-list">
      {filteredTasks.length === 0 ? (
        <p>Nenhuma tarefa encontrada.</p>
      ) : (
        filteredTasks.map((task) => (
          <div key={task.id} className="task-item">
            <span className={task.completed ? "completed" : ""}>
              {task.text}
            </span>

            <div className="task-actions">
              <button onClick={() => toggleTask(task.id)}>
                {task.completed ? "Desmarcar" : "Concluir"}
              </button>
              <button onClick={() => removeTask(task.id)}>Remover</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;