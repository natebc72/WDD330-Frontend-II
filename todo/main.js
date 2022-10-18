    //Once the window loads, so do the tasks
    window.onload = loadtasks;

    // On submit a task is added
    document.querySelector("form").addEventListener("submit", e => {
      e.preventDefault();
      addtask();
    });

    function loadtasks() {
      // check if localStorage has any tasks
      // if not then return
      if (localStorage.getItem("tasks") == null) return;

      // Gets the tasks from localStorage and converts it to an array
      let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));

      // Loops through the tasks and adds them to the list
      tasks.forEach(task => {
        const list = document.querySelector("ul");
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check" ${task.completed ? 'checked' : ''}>
          <input type="text" value="${task.task}" class="task ${task.completed ? 'completed' : ''}" onfocus="getCurrenttask(this)" onblur="edittask(this)">
          <i class="fa fa-trash" onclick="removetask(this)"></i>`;
        list.insertBefore(li, list.children[0]);
      });
    }

    function addtask() {
      const task = document.querySelector("form input");
      const list = document.querySelector("ul");
      // return if task is empty
      if (task.value === "") {
        alert("Please add a task good sir!");
        return false;
      }
      // check is task already exist
      if (document.querySelector(`input[value="${task.value}"]`)) {
        alert("You already thought of this Task, please add another!");
        return false;
      }

      // add task to local storage
      localStorage.setItem("tasks", JSON.stringify([...JSON.parse(localStorage.getItem("tasks") || "[]"), { task: task.value, completed: false }]));

      // create list item, add innerHTML and append to ul
      const li = document.createElement("li");
      li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check">
      <input type="text" value="${task.value}" class="task" onfocus="getCurrenttask(this)" onblur="edittask(this)">
      <i class="fa fa-trash" onclick="removetask(this)"></i>`;
      list.insertBefore(li, list.children[0]);
      // clear input
      task.value = "";
    }

    function taskComplete(event) {
      let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
      tasks.forEach(task => {
        if (task.task === event.nextElementSibling.value) {
          task.completed = !task.completed;
        }
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
      event.nextElementSibling.classList.toggle("completed");
    }

    function removetask(event) {
      let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
      tasks.forEach(task => {
        if (task.task === event.parentNode.children[1].value) {
          // delete task
          tasks.splice(tasks.indexOf(task), 1);
        }
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
      event.parentElement.remove();
    }

    // store current task to track changes
    var currenttask = null;

    // get current task
    function getCurrenttask(event) {
      currenttask = event.value;
    }

    // edit the task and update local storage
    function edittask(event) {
      let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
      // check if task is empty
      if (event.value === "") {
        alert("task is empty!");
        event.value = currenttask;
        return;
      }
      // task already exist
      tasks.forEach(task => {
        if (task.task === event.value) {
          alert("task already exist!");
          event.value = currenttask;
          return;
        }
      });
      // update task
      tasks.forEach(task => {
        if (task.task === currenttask) {
          task.task = event.value;
        }
      });
      // update local storage
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }