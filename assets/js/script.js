// selectors
const todoInput = document.getElementById('todo-input');
const todoButton = document.getElementById('todo-btn');
const todoList = document.getElementById('todo-list');
const todoComplete = document.getElementById('todo-done');
const clock = document.getElementById('clock');

// event listeners
todoButton.addEventListener('click', addTodo);
document.addEventListener('DOMContentLoaded', timeDate);

// functions

// get date function
function timeDate() {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const date = new Date();
    const month = months[date.getMonth()];
    const day = date.getDate();
    const weekday = weekdays[date.getDay()];
    let hour = date.getHours();
    let min = date.getMinutes();
    hour = addZero(hour);
    min = addZero(min);

    function addZero(nmbr) {

        if (nmbr < 10) {
            nmbr = "0" + nmbr;
        }
        return nmbr;
    }

    clock.innerHTML = `<p>${weekday}, ${month} ${day}, ${hour}:${min}</p>`;
    setTimeout(timeDate, 1000);
}

// addTodo function
function addTodo(event) {
    // prevent form submission
    event.preventDefault();

    // create todo elements
    // todoDiv   
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // elements div
    const elemDiv = document.createElement('div');
    elemDiv.classList.add('elem');

    // todo icon
    const todoIcon = document.createElement('img');
    todoIcon.src = "assets/images/to-do-list.png";
    todoIcon.classList.add('lead-img');
    elemDiv.appendChild(todoIcon);

    // todo item
    const todoItem = document.createElement('input');
    todoItem.classList.add('todo-item');
    todoItem.type = 'text';
    todoItem.value = todoInput.value;
    todoItem.disabled = true;
    elemDiv.appendChild(todoItem);

    // edit button
    const editButton = document.createElement('button');
    editButton.classList.add('edit-btn');
    elemDiv.appendChild(editButton);

    // check button
    const checkButton = document.createElement('button');
    checkButton.classList.add('check-btn');
    elemDiv.appendChild(checkButton);

    // delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    elemDiv.appendChild(deleteButton);

    // timestamp div 
    const timestmp = document.createElement('div');
    timestmp.classList.add('stamp');
    timestmp.innerHTML = clock.innerHTML;

    // append elements and timestamp div to todoDiv
    todoDiv.appendChild(elemDiv);
    todoDiv.appendChild(timestmp);

    // append to list
    const inputValue = todoInput.value;
    if (inputValue == '' || inputValue.match(/^ *$/) !== null) {
        swal("Oops...", "please, add a ToDo!");
    } else {
        todoList.appendChild(todoDiv);
        // clear todo input value
        todoInput.value = "";
    }

    // if element added hide empty state message
    if (checkTodos() > 0) {
        var emptySpan = document.getElementById('empty');
        emptySpan.style.display = 'none';
    }

    // controlers event listeners
    editButton.addEventListener('click', (editTodo));
    checkButton.addEventListener('click', (checkTodo));
    deleteButton.addEventListener('click', (deleteTodo));

    // controlers functions
    // edit function
    function editTodo() {
        if (todoItem.disabled == true) {
            todoItem.disabled = false;
            todoItem.focus();
            editButton.classList.replace('edit-btn', 'save-btn');
        } else {
            todoItem.disabled = true;
            editButton.classList.replace('save-btn', 'edit-btn');
        }
    }

    // check function
    function checkTodo() {
        if (checkButton.classList.contains('check-btn')) {
            todoIcon.src = "assets/images/done.png";
            todoComplete.appendChild(todoDiv);
            checkButton.classList.replace('check-btn', 'reopen-btn');
        } else {
            todoIcon.src = "assets/images/to-do-list.png";
            todoList.appendChild(todoDiv);
            checkButton.classList.replace('reopen-btn', 'check-btn');
        }
    }

    // delete function
    function deleteTodo() {
        const div = todoDiv.parentNode;
        div.removeChild(todoDiv);
        if (checkTodos() == 0) {
            var emptySpan = document.getElementById('empty');
            emptySpan.style.display = 'block';
        }
    }
}

// function to check if there are existing todos

function checkTodos() {
    return document.getElementsByClassName('todo').length;
}