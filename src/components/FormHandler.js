export class FormHandler {
  constructor(uiController) {
    this.uiController = uiController;
  }

  projectFormInit() {
    const projectForm = document.querySelector(".project-form");
    const projectTitleInput = document.querySelector("#project-title");
    const errorMessage = document.querySelector(".error");

    projectTitleInput.addEventListener("input", () => {
      if (projectTitleInput.validity.tooShort) {
        errorMessage.textContent = `Project name should be at least ${projectTitleInput.minLength} characters; you entered ${projectTitleInput.value.length}`;
      } else {
        errorMessage.textContent = "";
      }
    });

    projectForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const projectTitleValue = projectTitleInput.value;

      if (!projectTitleInput.validity.tooShort) {
        this.uiController.addProject(projectTitleValue);
        errorMessage.textContent = "";
      } else {
        errorMessage.textContent =
          "Please enter a project name 3 characters or longer";
      }

      projectForm.reset();
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

      this.uiController.addTask(
        titleValue,
        descriptionValue,
        dateValue,
        priorityValue
      );
      taskForm.reset();
    });
  }
}
