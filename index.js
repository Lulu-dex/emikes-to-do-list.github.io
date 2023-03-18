

// Initialize the todo list with some items
let todoList = ["learn javascript", "learn react native"];

// Display the current todo list
function displayTodoList() {
  let todoListHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    todoListHtml += "<li>" + todoList[i] + " <button type='button' onclick='removeItem(" + i + ")'>Remove</button></li>";
  }
  document.getElementById("todo-list").innerHTML = todoListHtml;
}

// Add a new item to the todo list
function addItem() {
  let newItem = document.getElementById("new-item").value;
  todoList.push(newItem);
  displayTodoList();
  document.getElementById("new-item").value = "";
}

// Remove an item from the todo list
function removeItem(index) {
  todoList.splice(index, 1);
  displayTodoList();
}

// Display the initial todo list
displayTodoList();

