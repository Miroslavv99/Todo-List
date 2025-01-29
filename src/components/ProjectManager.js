import { Project } from "./Project";

export class ProjectManager {
  #projects = [];

  addProject(projectTitle) {
    const project = new Project(projectTitle);
    this.#projects.push(project);
  }

  getProjects() {
    return this.#projects;
  }
}
