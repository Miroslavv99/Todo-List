export class FormHandler {
  constructor(uiController) {
    this.uiController = uiController;
  }

  projectFormInit() {
    const projectForm = document.querySelector(".project-form");
    const projectTitleInput = document.querySelector("#project-title");

    projectForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const projectTitleValue = projectTitleInput.value;

      if (!projectTitleInput.validity.tooShort) {
        this.uiController.addProject(projectTitleValue);
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
