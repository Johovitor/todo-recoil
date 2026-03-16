import { useRecoilState } from "recoil";
import { taskFilterState } from "../atoms/taskAtom";

function TaskFilter() {
  const [filter, setFilter] = useRecoilState(taskFilterState);

  return (
    <div className="task-filter">
      <button
        className={filter === "todas" ? "active" : ""}
        onClick={() => setFilter("todas")}
      >
        Todas
      </button>

      <button
        className={filter === "concluidas" ? "active" : ""}
        onClick={() => setFilter("concluidas")}
      >
        Concluídas
      </button>

      <button
        className={filter === "pendentes" ? "active" : ""}
        onClick={() => setFilter("pendentes")}
      >
        Pendentes
      </button>
    </div>
  );
}

export default TaskFilter;