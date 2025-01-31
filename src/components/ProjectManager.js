import { Project } from "./Project";

export class ProjectManager {
  #projects = [];

  addProject(projectTitle) {
    const project = new Project(projectTitle);
    this.#projects.push(project);
  }

  deleteProject(index) {
    this.#projects.splice(index, 1);
  }

  getProjects() {
    return this.#projects;
  }
}
