import { Project } from "./Project";

export class StorageManager {
  saveProjects(projects) {
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  getStoredProjects() {
    let projects = localStorage.getItem("projects");
    projects = JSON.parse(projects);
    return projects.map((project) => new Project(project.projectTitle)) || [];
  }
}
