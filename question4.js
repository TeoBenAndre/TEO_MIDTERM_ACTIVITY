// Task array to store tasks
let tasks = [];

// Function to generate a unique ID
function generateId() {
    return Math.floor(Math.random() * 10000);
}

// CREATE: Add a new task
function addTask(name, description) {
    const newTask = {
        id: generateId(),
        name: name,
        description: description
    };
    tasks.push(newTask);
    console.log("Task Added Successfully!");
}

// READ: View all tasks in a table format
function viewTasks() {
    if (tasks.length === 0) {
        console.log("No tasks available.");
    } else {
        console.log("Task List:");
        console.table(tasks);
    }
}

// UPDATE: Update a task by ID
function updateTask(id, newName, newDescription) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.name = newName;
        task.description = newDescription;
        console.log("Task Updated Successfully!");
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}

// DELETE: Remove a task by ID
function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
        console.log("Task Deleted Successfully!");
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}

// ** Testing the functions **
addTask("Buy what is needed in the list", "These are the list milk, eggs, bread, and butter");
viewTasks();  // Display tasks in table format

updateTask(tasks[0].id, "Buy groceries", "Updated: Milk, eggs, bread, butter, and cheese");
viewTasks();

deleteTask(tasks[0].id);
viewTasks();
