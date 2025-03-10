// Initiliaze the script
const addTaskButton = document.getElementById('addTaskButton');
const taskInput = document.getElementById('taskInput');
const dueDate = document.getElementById('dueDate');
const taskList = document.getElementById('taskList');
const modeToggle = document.getElementById('modeToggle');
const addNote = document.getElementById('addNote');

// Add task function
let tasks = [];
addTaskButton.addEventListener('click', function() {
    const task = taskInput.value.trim();
    const date = dueDate.value;
    
    if (task!=='') {
        const newTask = {
            task: task,
            dueDate: date,
            status: "Pending",
            notes:""
        };

        tasks.push(newTask);
        taskInput.value='';
        dueDate.value='';
        updateTaskList();
    }
});

// Update task list
function updateTaskList() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');

        const taskContent = `
            <span>${task.task}</span>
            <span>Due: ${task.dueDate || "No Due Date"}</span>
            <span>Status: ${task.status}</span>
            <button onclick="deleteTask(${index})">Delete</button>
            <button onclick="toggleStatus(${index})">Toggle Status</button>
        `;
        taskElement.innerHTML = taskContent;
        taskList.appendChild(taskElement);
    });
}

// Delete task function
function deleteTask(index) {
    tasks.splice(index, 1);
    updateTaskList();
}

// Toggle status function
function toggleStatus(index) {
    tasks[index].status = tasks[index].status === "Pending" ? "Done" : "Pending";
    updateTaskList();
}

// Toggle light/dark mode
modeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    modeToggle.textContent = document.body.classList.contains('dark-mode') ? '🌞Light Mode' : '🌙 Dark Mode';
});