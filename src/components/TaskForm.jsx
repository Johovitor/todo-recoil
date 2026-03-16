import { useState } from "react";
import { useRecoilState } from "recoil";
import { taskListState } from "../atoms/taskAtom";

function TaskForm() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useRecoilState(taskListState);

  const addTask = () => {
    if (taskText.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskText("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button onClick={addTask}>Adicionar</button>
    </div>
  );
}

export default TaskForm;