import { ProjectManager } from "./ProjectManager";
import { StorageManager } from "./Storage";
import { Renderer } from "./Renderer";

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

  deleteProject(index) {
    this.projectManager.deleteProject(index);
    this.storageManager.saveProjects(this.projectManager.getProjects());
    this.renderer.renderProjects(this.projectManager.getProjects());
  }

  selectProject(index) {
    this.selectedProject = this.projectManager.getProjects()[index];
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

  deleteTask(index) {
    if (!this.selectedProject) return;

    this.selectedProject.deleteTask(index);
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
