//klasa NewTask - tworzy możliwość dodawania nowego obiektu do tablicy i sprawdza, czy zostało coś wprowadzone w input
class NewTask {
    constructor(task) {
        let _newTask = task;

        this.getTheTask = () => _newTask;
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
        this.btnAdd = document.querySelector('section.add-task .add');

        this.tasksList = document.querySelector('div.task-list ul.tasks');
        this.tasksNumber = document.querySelector('div.task-list h3 span');


        // taskListItem.dataset.key
        this.getInputValue = () => this.inputAdd.value;


        // console.log(this.inputAdd);

        // this.task = new NewTask(this.getAny());
        // this.toDoList.push(this.task.getTheTask());
        // console.log(this.toDoList)

        // btnAdd.addEventListener('click', this.addNewTask.bind(this));
        // // taskListItem.querySelector('button').addEventListener('click', removeDoneTask);

        // if (value) {
        //     this.toDoList.push(value);
        this.btnAdd.addEventListener('click', this.addNewElement.bind(this));
        // this.listItemsArr = [...this.listItem];
        // console.log(this.listItemsArr)


    }
    //usuwanie istniejącego zadania za pomocą buttona "Remove", który jest dodawany w klasie ToDoApp
    removeTask(e) {
        e.target.parentNode.remove();

        const index = e.target.parentNode.dataset.key;
        console.log(index);
        this.toDoList.splice(index, 1);
        this.tasksNumber.textContent = this.toDoList.length;
    }

    //dodawanie nowego elementu DOM
    addNewElement() {
        this.task = new NewTask(this.getInputValue());
        if (this.task.checkForTask()) return alert('no task specified');

        let taskListItem = document.createElement('li');
        taskListItem.className = 'one-task';
        this.tasksList.appendChild(taskListItem)
        taskListItem.innerHTML = this.task.getTheTask() + "<button>remove</button>";

        this.toDoList.forEach((key, index) => {
            taskListItem.dataset.key = index;
        })

        this.toDoList.push(this.task.getTheTask());
        this.tasksNumber.textContent = this.toDoList.length;

        taskListItem.querySelector('button').addEventListener('click', this.removeTask);
    }

}
const newApp = new ToDoApp();

/*




//phase 3 - searching for tasks
class Search {
    static searchTasks = (e) => {
        this.searchText = e.target.value.toLowerCase();
        this.newTasksArr = toDoList.filter(task => task.textContent.toLowerCase().includes(searchText));
        // tasksList.textContent = '';
        // newTasksArr.forEach(task => tasksList.appendChild(task));
    }
}

//importing DOM objects from HTML

class ToDoApp {
    constructor() {
        // this.toDoList = [];
        this.inputAdd = document.querySelector('[data-option="add-new"]');
        this.inputSearch = document.querySelector('[data-option="search-app"]');
        this.btnAdd = document.querySelector('section.add-task .add');

        this.tasksList = document.querySelector('div.task-list ul.tasks');
        this.listItem = document.getElementsByClassName('one-task');
        this.tasksNumber = document.querySelector('div.task-list h3 span');

        this.task = new NewTask(inputAdd.value);
        this.remove = new RemoveTask();

        btnAdd.addEventListener('click', this.addNewTask.bind(this));
        // taskListItem.querySelector('button').addEventListener('click', removeDoneTask);



    }
    //rendering list - adding data-key with number according to array index ('key is index')
    render() {
        tasksList.textContent = "";
        this.remove.getTheList().forEach((element, key) => {
            element.dataset.key = key;
            tasksList.appendChild(element);
        })
    }

    addNewTask() {
        const taskList = document.createElement('ul');
        taskList.className = 'task-list';
        taskList.textContent = task.tasksList();
        taskListItem.className = 'one-task';
        taskListItem.innerHTML = task.getNewTask() + "<button>remove</button>";
        task.tasksList().push(taskListItem);
        // 
        // if (this.task.checkForTask())

    };
}*/

