import { Project } from "./Project";

export class ProjectManager {
  constructor() {
    this.projects = [];
  }

  addProject(projectTitle) {
    const project = new Project(crypto.randomUUID(), projectTitle);
    this.projects.push(project);
  }

  deleteProject(projectID) {
    this.projects = this.projects.filter((project) => project.id !== projectID);
  }

  getProjects() {
    return this.projects;
  }
}
