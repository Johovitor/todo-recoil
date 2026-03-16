import { selector } from "recoil";
import { taskListState, taskFilterState } from "../atoms/taskAtom";

export const filteredTaskListState = selector({
  key: "filteredTaskListState",
  get: ({ get }) => {
    const tasks = get(taskListState);
    const filter = get(taskFilterState);

    switch (filter) {
      case "concluidas":
        return tasks.filter((task) => task.completed);
      case "pendentes":
        return tasks.filter((task) => !task.completed);
      case "todas":
      default:
        return tasks;
    }
  },
});