// Add task function called from html form
// This function will take the data entered by the user in the html form
// and send it to the server(views.py)
// To be processed and stored
function createTask(event) {
    event.preventDefault();
    let taskInput = document.getElementById('taskInput').value.trim();
    if (taskInput == '') {
        alert('Please enter a task');
        return false;
    }

    var formData = new FormData();
    formData.append('task', taskInput);

    $.ajax({

        url: '/storeTaskInDatabase/',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function(response) {
            alert('Task added successfully');
        },

        error: function(error) {
            alert('Task could not be added');
        }   
    }
 )
 return false;
}
