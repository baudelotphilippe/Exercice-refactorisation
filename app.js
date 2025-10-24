const tasks = [];

function addTask(title) {
  const task = { id: Date.now(), title, done: false };
  tasks.push(task);
  renderTasks();
}

function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  if (task) task.done = !task.done;
  renderTasks();
}

function renderTasks() {
  const list = document.querySelector('#taskList');
  list.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task.title + (task.done ? ' X' : '');
    li.addEventListener('click', () => toggleTask(task.id));
    list.appendChild(li);
  });
}

document.querySelector('#addBtn').addEventListener('click', () => {
  const input = document.querySelector('#taskInput');
  addTask(input.value);
  input.value = '';
});
