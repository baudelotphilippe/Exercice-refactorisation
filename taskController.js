import { getTasks, toggleTask, addTask } from "./taskModel.js";
import { renderTasks } from "./taskView.js";

export function init() {
  const render = () => renderTasks(getTasks(), handleToggle);

  function handleToggle(id) {
    toggleTask(id);
    render();
  }

  function handleAdd() {    
    const input = document.querySelector("#taskInput");
    addTask(input.value);
    input.value = "";
    render()
  }

  document.querySelector("#addBtn").addEventListener("click", () => handleAdd() );
  render();
}
