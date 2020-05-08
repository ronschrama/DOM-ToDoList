// All the elements that I need to require from the DOM
const toDoContainer = document.querySelector('.todo-list');
const form = document.querySelector('#todoform');


// Array for todo items
let toDoArray = [];

// Class to create todo item
function ToDoItem(title, description) {
  this.title = title;
  this.description = description;
  this.done = false;
}

// Get data from localstorage
function getStoredToDo() {
  toDoArray = JSON.parse(localStorage.getItem('toDoArray'));
  if (!toDoArray) {
    toDoArray = [];
  }
}

// Put data in localstorage
function storeToDo() {
  localStorage.setItem('toDoArray', JSON.stringify(toDoArray));
}

// Remove Todo
function removeToDoItem(title, removeButton, removeDesc, removeTitle, toDoItem) {
  toDoArray.splice(toDoArray.findIndex((value) => value.title === title), 1);
  removeButton.parentNode.removeChild(removeButton);
  removeDesc.parentNode.removeChild(removeDesc);
  removeTitle.parentNode.removeChild(removeTitle);
  const removeItem = toDoItem;
  removeItem.parentNode.removeChild(removeItem);
  storeToDo();
}

// Change toDO state to remember in localstorage
function changeToDoState(title) {
  const newState = toDoArray.findIndex((value) => value.title === title);
  toDoArray[newState].done = true;
  storeToDo();
}

// Create new ToDo element to append to the DOM
function createTodoItem(title, desc, status) {
  const newToDoItem = document.createElement('div');
  const newTitle = document.createElement('h2');
  const newDesc = document.createElement('p');
  const newButton = document.createElement('button');
  const itemStatus = status;
  newToDoItem.className = 'todo-item';
  newTitle.textContent = title;
  newDesc.textContent = desc;
  newButton.textContent = 'Remove';
  newToDoItem.appendChild(newTitle);
  newToDoItem.appendChild(newDesc);
  newToDoItem.appendChild(newButton);
  toDoContainer.appendChild(newToDoItem);
  newToDoItem.addEventListener('click', function changeClass() {
    this.classList.add('done');
    newButton.classList.add('on');
    changeToDoState(newTitle.textContent);
    toDoContainer.appendChild(newToDoItem);
  });
  newButton.addEventListener('click', () => {
    removeToDoItem(newTitle.textContent, newButton, newDesc, newTitle, newToDoItem);
  });
  if (itemStatus === true) {
    newToDoItem.classList.add('done');
    newButton.classList.add('on');
  }
}

// Loop over all the existing items to append to DOM on pageload
function listToDoItems() {
  for (let i = 0; i < toDoArray.length; i += 1) {
    const newTitle = toDoArray[i].title;
    const newDesc = toDoArray[i].description;
    const toDoStatus = toDoArray[i].done;
    createTodoItem(newTitle, newDesc, toDoStatus);
  }
}

// Load all the items currently in the array on pageload
getStoredToDo();
listToDoItems();


// Push new item to the array
function addNewToDo(title, description) {
  const newItem = new ToDoItem(title, description);
  toDoArray.push(newItem);
  storeToDo();
  createTodoItem(title, description);
}

// On click to add item create new todo
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addNewToDo(document.querySelector('#todotitle').value, document.querySelector('#description').value);
  form.reset();
});
