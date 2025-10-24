
const tasks = [{id:1, title:'test', done:true}];

export function addTask(title) {
    console.log("in")
  const task = { id: Date.now(), title, done: false };
  tasks.push(task);
  return tasks
}

export function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  if (task) task.done = !task.done;
  return tasks
}

export function getTasks() {
    return [...tasks]
}