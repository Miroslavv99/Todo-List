import "../public/styles.css";
import { Project } from "./components/Project";
import { ProjectManager } from "./components/ProjectManager";
import { UIController } from "./components/UIController";
import { StorageManager } from "./components/UIController";

const projectManager = new ProjectManager();
const storageManager = new StorageManager();
const uiController = new UIController(projectManager, storageManager);
