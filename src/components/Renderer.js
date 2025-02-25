export class Renderer {
  constructor(uiController) {
    this.uiController = uiController;
  }
  renderProjects(projects) {
    const projectContainer = document.querySelector(".project-container");

    projectContainer.innerHTML = "";

    projects.forEach((project) => {
      const projectCard = document.createElement("button");
      projectCard.classList.add("project-card");
      projectContainer.appendChild(projectCard);

      const cardTitle = document.createElement("h1");
      cardTitle.textContent = `${project.projectTitle}`;
      projectCard.appendChild(cardTitle);

      const deleteButton = document.createElement("button");
      deleteButton.classList.add("delete-button");
      projectCard.appendChild(deleteButton);

      deleteButton.addEventListener("click", () => {
        this.uiController.deleteProject(project.id);
      });

      projectCard.addEventListener("click", () => {
        this.uiController.selectProject(project.id);

        const projectCards = document.querySelectorAll(".project-card");
        projectCards.forEach((card) => {
          card.classList.remove("active");
        });
        projectCard.classList.add("active");
      });
    });
  }

  renderTasks(tasks) {
    const taskContainer = document.querySelector(".task-container");
    taskContainer.innerHTML = "";

    tasks.forEach((task) => {
      const taskCard = document.createElement("div");
      taskCard.classList.add("task-card");
      taskContainer.appendChild(taskCard);

      const priorityDiv = document.createElement("div");
      priorityDiv.classList.add("priority");
      taskCard.appendChild(priorityDiv);

      const topContainer = document.createElement("div");
      topContainer.classList.add("card-top");
      taskCard.appendChild(topContainer);

      const bottomContainer = document.createElement("div");
      bottomContainer.classList.add("card-bottom");
      taskCard.appendChild(bottomContainer);

      const cardTitle = document.createElement("h2");
      cardTitle.textContent = `${task.taskTitle}`;
      topContainer.appendChild(cardTitle);

      const cardDescription = document.createElement("span");
      cardDescription.textContent = `${task.taskDescription}`;
      cardDescription.style.color = "grey";
      topContainer.appendChild(cardDescription);

      const cardPriority = document.createElement("span");
      cardPriority.textContent = `PRIORITY: ${task.taskPriority}`;
      bottomContainer.appendChild(cardPriority);

      const cardDeadline = document.createElement("span");
      cardDeadline.textContent = `DEADLINE: ${task.taskDeadline}`;
      bottomContainer.appendChild(cardDeadline);

      const changeComplete = document.createElement("button");
      changeComplete.classList.add("incomplete-button");
      changeComplete.textContent = `${task.taskCompleted}`;
      bottomContainer.appendChild(changeComplete);

      if (task.taskCompleted === "COMPLETED") {
        changeComplete.classList.add("complete-button");
        changeComplete.classList.remove("incomplete-button");
      } else {
        changeComplete.classList.add("incomplete-button");
        changeComplete.classList.remove("complete-button");
      }

      changeComplete.addEventListener("click", () => {
        this.uiController.toggleTaskCompleted(task);
      });

      const deleteTask = document.createElement("button");
      deleteTask.classList.add("delete-task");
      bottomContainer.appendChild(deleteTask);

      deleteTask.addEventListener("click", () => {
        this.uiController.deleteTask(task.id);
      });

      if (task.taskPriority === "Low") {
        priorityDiv.style.backgroundColor = "rgb(26, 167, 30, 0.5)";
      } else if (task.taskPriority === "Medium") {
        priorityDiv.style.backgroundColor = "rgb(255, 221, 0, 0.5)";
      } else {
        priorityDiv.style.backgroundColor = "rgba(255, 0, 0, 0.6)";
      }
    });
  }
}
