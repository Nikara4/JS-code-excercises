//importing DOM objects from HTML
const toDoList = [];
const inputAdd = document.querySelector('[data-option="add-new"]');
const inputSearch = document.querySelector('[data-option="search-app"]');
const btnAdd = document.querySelector('section.add-task .add');

let tasksList = document.querySelector('div.task-list ul.tasks');
const listItem = document.getElementsByClassName('one-task');
let tasksNumber = document.querySelector('div.task-list h3 span');

//phase 1 - add tasks to the list and remove buttons
const addNewTask = () => {
    const newTask = inputAdd.value.toLowerCase();

    if (!newTask) {
        alert('no task specified');
    } else {
        const taskListItem = document.createElement('li');
        taskListItem.className = 'one-task';
        taskListItem.innerHTML = newTask + "<button>remove</button>";
        toDoList.push(taskListItem);
        taskListItem.querySelector('button').addEventListener('click', removeDoneTask);
        renderList();
    }
    inputAdd.value = '';
    tasksNumber.textContent = toDoList.length;
}

//phase 2 - removing tasks from the list with the removing button
const removeDoneTask = (e) => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1);
    tasksNumber.textContent = toDoList.length;
    renderList();
}

// phase 3 - rendering list - adding data-key with number according to array index ('key is index')
const renderList = () => {
    tasksList.textContent = "";
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        tasksList.appendChild(toDoElement);
    })
}

//phase 3 - searching for tasks
const searchForTask = (e) => {
    const searchText = e.target.value.toLowerCase();
    const newtasksArr = toDoList.filter(task => task.textContent.toLowerCase().includes(searchText));
    tasksList.textContent = '';
    newtasksArr.forEach(task => tasksList.appendChild(task));
}

btnAdd.addEventListener('click', addNewTask);
inputSearch.addEventListener('input', searchForTask);