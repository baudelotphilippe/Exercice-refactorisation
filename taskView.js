export function renderTasks(tasks, toggleTask) {
  const list = document.querySelector('#taskList');
  list.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task.title + (task.done ? ' [X]' : ' [ ]');
    li.addEventListener('click', () => toggleTask(task.id));
    list.appendChild(li);
  });
}