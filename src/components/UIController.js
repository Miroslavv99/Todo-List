export class UIController {
  constructor(projectManager, storageManager, renderer) {
    this.storageManager = storageManager;
    this.projectManager = projectManager;
    this.selectedProject = null;
    this.renderer = renderer;
  }

  addProject(projectTitle) {
    this.projectManager.addProject(projectTitle);
    this.storageManager.saveProjects(this.projectManager.getProjects());
    this.renderer.renderProjects(this.projectManager.getProjects());
  }

  deleteProject(projectID) {
    this.projectManager.deleteProject(projectID);
    this.storageManager.saveProjects(this.projectManager.getProjects());
    this.renderer.renderProjects(this.projectManager.getProjects());
  }

  selectProject(projectID) {
    this.selectedProject = this.projectManager
      .getProjects()
      .find((project) => project.id === projectID);
    if (!this.selectedProject) return;
    this.renderer.renderTasks(this.selectedProject.getTasks());
  }

  addTask(taskTitle, taskDescription, taskDeadline, taskPriority) {
    if (!this.selectedProject) {
      alert("First, select a project!");
      return;
    }

    this.selectedProject.addTask(
      taskTitle,
      taskDescription,
      taskDeadline,
      taskPriority
    );

    this.storageManager.saveProjects(this.projectManager.getProjects());
    this.renderer.renderTasks(this.selectedProject.getTasks());
  }

  deleteTask(taskID) {
    if (!this.selectedProject) return;

    this.selectedProject.deleteTask(taskID);
    this.storageManager.saveProjects(this.projectManager.getProjects());
    this.renderer.renderTasks(this.selectedProject.getTasks());
  }

  toggleTaskCompleted(task) {
    task.taskCompleted =
      task.taskCompleted === "COMPLETED" ? "PENDING" : "COMPLETED";
    this.storageManager.saveProjects(this.projectManager.getProjects());
    this.renderer.renderTasks(this.selectedProject.getTasks());
  }
}
