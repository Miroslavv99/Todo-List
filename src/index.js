import "../public/styles.css";
import { Project } from "./components/Project";
import { ProjectManager } from "./components/ProjectManager";
import { UIController } from "./components/UIController";
import { StorageManager } from "./components/Storage";
import { Renderer } from "./components/Renderer";
import { FormHandler } from "./components/FormHandler";

const projectManager = new ProjectManager();
const storageManager = new StorageManager();
const uiController = new UIController(projectManager, storageManager);
const renderer = new Renderer(uiController);
uiController.renderer = renderer;
const formHandler = new FormHandler(uiController);

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
  });
  renderer.renderProjects(projectManager.getProjects());
});
