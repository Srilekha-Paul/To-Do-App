const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

taskInput.addEventListener("keypress", e => {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;

  taskList.innerHTML += `
    <li>
      <div class="task">
        <input type="checkbox" onchange="this.parentElement.classList.toggle('done')">
        <span>${text}</span>
      </div>
      <button class="delete" onclick="this.parentElement.remove()">🗑️</button>
    </li>
  `;
  taskInput.value = "";
}



