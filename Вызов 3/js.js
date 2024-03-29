const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function addTask(taskText) {
    const taskItem = document.createElement('li');
    taskItem.innerText = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Удалить';
    deleteBtn.classList.add('deleteBtn');

    deleteBtn.addEventListener('click', function() {
        taskItem.remove();
        saveTasks();
    });

    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);
}

window.addEventListener('load', function() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTask(task));
});

addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        saveTasks();
        taskInput.value = '';
    }
});

function saveTasks() {
    const tasks = Array.from(document.querySelectorAll('li')).map(task => task.innerText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}