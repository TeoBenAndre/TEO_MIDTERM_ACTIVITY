// Task array to store tasks
let tasks = [];


function generateId() {
    return Math.floor(Math.random() * 10000);
}


function addTask(name, description) {
    const newTask = {
        id: generateId(),
        name: name,
        description: description
    };
    tasks.push(newTask);
    console.log(`Task added:`, newTask);
}


function viewTasks() {
    console.log("Task List:");
    console.table(tasks);
}


function updateTask(id, newName, newDescription) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.name = newName;
        task.description = newDescription;
        console.log(`Task updated:`, task);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}


function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        const removedTask = tasks.splice(index, 1);
        console.log(`Task deleted:`, removedTask[0]);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}

// Testing the functions -------------- //
addTask("Buy Groceries", "Purchase milk, eggs, and bread");
addTask("Study JavaScript", "Complete Express.js tutorial");
viewTasks();

updateTask(tasks[0].id, "Buy what is needed in the list", " These are the list milk, eggs, bread, and butter");
viewTasks();

deleteTask(tasks[1].id);
viewTasks();
