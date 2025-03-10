// Need to ask why i need this
//document.addEventListener('DOMContentLoaded', loadTasks);
function addTask() {
    let taskTitle = document.getElementById('task-title').value;
    let taskDate = document.getElementById('task-date').value;
    let taskCategory = document.getElementById('task-category').value;
    if (taskTitle === '' || taskDate === '' || taskCategory === '') {
        alert ('Please fill in all fields');
        return;
    }
}

// Remove task
// Save task
// Load task
// ToggleDarkMode

