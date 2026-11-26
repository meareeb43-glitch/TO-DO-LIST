let inputBox = document.getElementById('inputvalue');
let addtask = document.getElementById('addbtn');
let todolistitem = document.getElementById('todolistitem');
let updatetask = document.getElementById('updatebtn');
addtask.addEventListener('click', () => {
  let task = inputBox.value;
  const li = document.createElement('li');
  li.innerHTML = `
<input type = "checkbox" class="strike-toggle">
<p> ${task} </p>
<div class = "taskbtnz">
<img src="assets/edit.png" alt="editbtn" width = "15px" height = "15px" class="editbtn">
<img src="assets/delete.png" alt="deletebtn" width = "15px" height = "15px" class="deletebtn" >
</div>`;
  todolistitem.appendChild(li);
  inputBox.value = " ";
  const edit_btn = li.querySelector('.editbtn');
  let editTask;
  edit_btn.addEventListener('click', () => {
    inputBox.value = li.querySelector("p").textContent;
    editTask = li;
    addtask.style.display = "none";
    updatetask.style.display = "block";
    updatetask.addEventListener('click', () => {
      editTask.querySelector("p").textContent = inputBox.value;
      addtask.style.display = "block";
      updatetask.style.display = "none";
      inputBox.value = " ";
    });
  });
  const delete_btn = li.querySelector('.deletebtn');
  delete_btn.addEventListener('click', () => {
    li.remove();
  });
  saveLocalTodos(li.innerText);
});
const saveLocalTodos = (todo) => {
  let todos;
  if (localStorage.getItem("todos") == null) {
    todos = [];
  }
  else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}
const getLocalTodos = (todo) => {
  let todos;
  if (localStorage.getItem("todos") == null) {
    todos = [];
  }
  else {
    todos = JSON.parse(localStorage.getItem("todos"));
    todos.forEach(todos => {
      const li = document.createElement('li');
      li.innerHTML = `
<input type = "checkbox" class="strike-toggle">
<p> ${todos} </p>
<div class = "taskbtnz">
<img src="assets/edit.png" alt="editbtn" width = "15px" height = "15px" class="editbtn">
<img src="assets/delete.png" alt="deletebtn" width = "15px" height = "15px" class="deletebtn" >
</div>`;
      todolistitem.appendChild(li);
      inputBox.value = " ";
      const edit_btn = li.querySelector('.editbtn');
      let editTask;
      edit_btn.addEventListener('click', () => {
        inputBox.value = li.querySelector("p").textContent;
        editTask = li;
        addtask.style.display = "none";
        updatetask.style.display = "block";
        updatetask.addEventListener('click', () => {
          editTask.querySelector("p").textContent = inputBox.value;
          addtask.style.display = "block";
          updatetask.style.display = "none";
          inputBox.value = " ";
        });
      });
      const delete_btn = li.querySelector('.deletebtn');
      delete_btn.addEventListener('click', () => {
        li.remove();
      });
    });
  }
}
const deleteLocalTodos= (todo)=>{
  let todos;
  if (localStorage.getItem("todos") == null) {
    todos = [];
  }
  else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  
}
document.addEventListener('DOMContentLoaded',getLocalTodos);