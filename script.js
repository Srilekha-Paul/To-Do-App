const taskInput = document.getElementById("item-input");
const taskList = document.getElementById("taskList");

taskInput.addEventListener("keypress", e => {
  if (e.key === "Enter") addTask();
});

