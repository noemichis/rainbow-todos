// selectors
const todoInput = document.getElementById('todo-input');
const todoButton = document.getElementById('todo-btn');
const todoList = document.getElementById('todo-list');
const todoComplete = document.getElementById('todo-done');

// event listeners

todoButton.addEventListener('click', addTodo);

// functions

function addTodo(event) {
    // prevent form submission
    event.preventDefault();

    // create todo elements
    // todoDiv   
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // todo icon
    const todoIcon = document.createElement('img');
    todoIcon.src = "assets/images/to-do-list.png";
    todoIcon.classList.add('lead-img');
    todoDiv.appendChild(todoIcon);

    // todo item
    const todoItem = document.createElement('input');
    todoItem.classList.add('todo-item');
    todoItem.type = 'text';
    todoItem.value = todoInput.value;
    todoItem.disabled = true;
    todoDiv.appendChild(todoItem);

    // button div
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('buttons');
    todoDiv.appendChild(buttonDiv);

    // edit button
    const editButton = document.createElement('button');
    editButton.innerHTML = '<img src="assets/images/edit.png">';
    editButton.classList.add('edit-btn');
    buttonDiv.appendChild(editButton);
    // check button
    const checkButton = document.createElement('button');
    checkButton.innerHTML = '<img src="assets/images/check.png">';
    checkButton.classList.add('check-btn');
    buttonDiv.appendChild(checkButton);
    // delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<img src="assets/images/delete.png">';
    deleteButton.classList.add('delete-btn');
    buttonDiv.appendChild(deleteButton);


    // append to list

    if (todoInput.value == '') {
        alert('Ooops, add a ToDo')
    } else {
        todoList.appendChild(todoDiv);
        // clear todo input value
        todoInput.value = "";
    }
}