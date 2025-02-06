import "../public/styles.css";
import { Project } from "./components/Project";
import { ProjectManager } from "./components/ProjectManager";
import { UIController } from "./components/UIController";
import { StorageManager } from "./components/Storage";

const projectManager = new ProjectManager();
const storageManager = new StorageManager();
const uiController = new UIController(projectManager, storageManager);

document.addEventListener("DOMContentLoaded", () => {
  const storedProjects = storageManager.getStoredProjects();
  storedProjects.forEach((project) => {
    projectManager.addProject(project.projectTitle);

    project.getTasks().forEach((task) => {
      projectManager
        .getProjects()
        .find((item) => item.projectTitle === project.projectTitle)
        .addTask(
          task.taskTitle,
          task.taskDescription,
          task.taskDeadline,
          task.taskPriority,
          task.taskCompleted
        );
    });

    uiController.renderProjects(projectManager.getProjects());
  });
});
