import "../public/styles.css";

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

formHandler.projectFormInit();
formHandler.taskFormInit();

document.addEventListener("DOMContentLoaded", () => {
  const storedProjects = storageManager.getStoredProjects();

  storedProjects.forEach((project) => {
    projectManager.getProjects().push(project);
  });

  uiController.renderer.renderProjects(projectManager.getProjects());
});
