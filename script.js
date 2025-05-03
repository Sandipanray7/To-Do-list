document.getElementById("addTaskBtn").addEventListener("click", function () {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") return;
  
    const li = document.createElement("li");
    li.textContent = taskText;
  
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function () {
      li.remove();
      // Show success message for deletion
      const messageDiv1 = document.getElementById("message1");
      messageDiv1.textContent = "Task deleted successfully!";
      messageDiv1.style.display = "block";
      setTimeout(() => {
        messageDiv1.style.display = "none";
      }, 2000);
    };
  
    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
  
    // Show success message
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = "Task added successfully!";
    messageDiv.style.display = "block";
    setTimeout(() => {
      messageDiv.style.display = "none";
    }, 2000);
  });
  document.getElementById("taskInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      document.getElementById("addTaskBtn").click();
    }
  });
  