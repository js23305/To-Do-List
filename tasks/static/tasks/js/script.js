// Function to add a new task
function addTask() {
    let taskInput = document.getElementById("taskInput"); // Get input field
    let taskValue = taskInput.value.trim(); // Get input value

    if (taskValue === "") {
        alert("Please enter a task!"); // Alert if empty
        return;
    }

    let taskList = document.getElementById("taskList"); // Get task list

    // Create a new list item
    let li = document.createElement("li");
    li.textContent = taskValue;

    // Click to mark as completed 
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    // Create delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete-btn");
    // Click to delete task
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = ""; // Clear input field
}
