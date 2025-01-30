import { ProjectManager } from "./ProjectManager";

export class UIController {
  constructor(projectManager, storageManager) {
    this.storageManager = storageManager;
    this.projectManager = projectManager;
    this.selectedProject = null;
    this.projectFormInit();
    this.taskFormInit();
  }

  projectFormInit() {
    const projectForm = document.querySelector(".project-form");
    const projectTitleInput = document.querySelector("#project-title");

    projectForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const projectTitleValue = projectTitleInput.value;

      if (projectTitleValue.trim()) {
        this.projectManager.addProject(projectTitleValue);
        this.renderProjects(this.projectManager.getProjects());
        this.storageManager.saveProjects(this.projectManager.getProjects());
      }

      projectForm.reset();
    });
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

      projectCard.addEventListener("click", () => {
        this.selectedProject = project;
        this.renderTasks(this.selectedProject.getTasks());
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

      if (task.taskPriority === "Low") {
        taskCard.style.backgroundColor = "green";
      }
    });
  }

  taskFormInit() {
    const taskForm = document.querySelector(".task-form");

    taskForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const titleValue = document.querySelector("#task-title").value;
      const descriptionValue = document.querySelector("#description").value;
      const dateValue = document.querySelector("#date").value;
      const priorityValue = document.querySelector("#priority").value;

      if (!this.selectedProject) {
        alert("First, select a project!");
        return;
      } else {
        this.selectedProject.addTask(
          titleValue,
          descriptionValue,
          dateValue,
          priorityValue
        );
        this.renderTasks(this.selectedProject.getTasks());
        this.storageManager.saveProjects(this.projectManager.getProjects());
        taskForm.reset();
      }
    });
  }
}

export class StorageManager {
  saveProjects(projects) {
    localStorage.setItem("projects", JSON.stringify(projects));
  }
}
