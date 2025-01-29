import { ProjectManager } from "./ProjectManager";

export class UIController {
  constructor(projectManager) {
    this.projectManager = projectManager;
    this.selectedProject;
    this.projectFormInit();
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
      }

      projectForm.reset();
    });
  }

  renderProjects(projects) {
    const projectContainer = document.querySelector(".project-container");
    projectContainer.innerHTML = "";

    projects.forEach((project) => {
      const projectCard = document.createElement("div");
      projectCard.classList.add("project-card");
      projectContainer.appendChild(projectCard);

      const cardTitle = document.createElement("h1");
      cardTitle.textContent = `${project.projectTitle}`;
      projectCard.appendChild(cardTitle);
    });
  }

  renderTasks(tasks) {}
}
