import { Project } from "./Project";

export class ProjectManager {
  constructor() {
    this._projects = [];
  }

  addProject(projectTitle) {
    const project = new Project(projectTitle);
    this._projects.push(project);
  }

  deleteProject(index) {
    this._projects.splice(index, 1);
  }

  getProjects() {
    return this._projects;
  }
}
