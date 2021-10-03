//klasa NewTask - tworzy możliwość dodawania nowego obiektu do tablicy i sprawdza, czy zostało coś wprowadzone w input
class NewTask {
    constructor(task) {
        let _newTask = task;
        this.getTheTask = () => _newTask;

        this.taskListItem = document.createElement('li');
        this.taskListItem.innerHTML = this.getTheTask() + "<button>remove</button>";
    }

    checkForTask(value) {
        value = this.getTheTask();
        if (!value) {
            return true;
        }
    }
}

class ToDoApp {
    constructor() {

        this.toDoList = [];
        this.inputAdd = document.querySelector('[data-option="add-new"]');
        this.inputSearch = document.querySelector('[data-option="search-app"]');
        this.btnAdd = document.querySelector('.add-task .add');
        this.tasksList = document.querySelector('.task-list ul.tasks');
        this.tasksNumber = document.querySelector('.task-list p span');

        this.getInputValue = () => this.inputAdd.value;
        this.btnAdd.addEventListener('click', this.addNewElement.bind(this));
        this.inputSearch.addEventListener('input', this.searchTasks.bind(this));
    }
    render() {
        this.inputAdd.value = '';

        this.toDoList.forEach((key, index) => {
            this.task.taskListItem.dataset.key = index;
        })
    }
    //usuwanie istniejącego zadania za pomocą buttona "Remove", który jest dodawany w klasie ToDoApp
    removeTask(e) {
        e.target.parentNode.remove();
        this.index = e.target.parentNode.dataset.key;
        this.toDoList.splice(this.index, 1);
        this.tasksNumber.textContent = this.toDoList.length;
    }

    //phase 3 - searching for tasks
    searchTasks = (e) => {
        this.searchText = e.target.value.toLowerCase();
        console.log(this.searchText);
        let that = this;
        const filterTasks = this.toDoList.filter(el => {
            el.toLowerCase().includes(that.searchText);
        });

        this.tasksList.textContent = '';
        filterTasks.forEach(task => that.toDoList.appendChild(task));
        console.log(filterTasks);
    }

    //dodawanie nowego elementu DOM
    addNewElement() {
        this.task = new NewTask(this.getInputValue());
        if (this.task.checkForTask()) return alert('no task specified');

        this.tasksList.appendChild(this.task.taskListItem)
        this.toDoList.push(this.task.getTheTask());
        this.tasksNumber.textContent = this.toDoList.length;

        this.task.taskListItem.querySelector('button').addEventListener('click', this.removeTask.bind(this));
        this.render();

    }
}

const newApp = new ToDoApp();



