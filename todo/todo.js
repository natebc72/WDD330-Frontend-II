const taskInput = document.querySelector(".task-input input"),
filters = document.querySelectorAll(".filters span"),
taskBox = document.querySelector(".task-box");

//getting localStorage todo list
let todos = JSON.parse(localStorage.getItem("todo-list"));

filters.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector("span.active").classList.remove("active");
        btn.classList.add("active");
        showTodo(btn.id);
    });
});

function showTodo(filter) {
    let li = "";
    if(todos){
        todos.forEach((todo, id) => {
            let isCompleted = todo.status == "completed" ? "checked" : "";
            if(filter == todo.status || filter =="all") {
            li += `<li class="task">
                    <label for="${id}">
                        <input onclick="updateStatus(this)" type="checkbox" id="${id}" ${isCompleted}>
                        <p class="${isCompleted}">${todo.name}</p>
                    </label>
                    <input type="button" onclick="deleteTask(${id})" class="delete" value="❌">
                    </li>`;
            }
        });
    }
    taskBox.innerHTML = li || `<span><em>You don't have any tasks in this section right now</em></span>`;
}
 showTodo("all");

 function deleteTask(deleteId) {
    todos.splice(deleteId, 1);
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showTodo();
 }

function updateStatus(selectTask){
    let taskName = selectTask.parentElement.lastElementChild;
    if(selectTask.checked) {
        taskName.classList.add("checked");
        todos[selectTask.id].status ="completed";
    } else{
        taskName.classList.remove("checked");
        todos[selectTask.id].status ="pending";
    }
    localStorage.setItem("todo-list", JSON.stringify(todos));
}

taskInput.addEventListener("keyup", e => {
    let userTask = taskInput.value.trim();
    if(e.key == "Enter" && userTask) {
        if(!todos) { //if a task doesn't exist, an empty array will be passed
            todos = [];
        }
        taskInput.value = "";
        let taskInfo = {name: userTask, status: "pending"};
        todos.push(taskInfo); //this will add new task to todos
        localStorage.setItem("todo-list", JSON.stringify(todos));
        showTodo();
    }
})