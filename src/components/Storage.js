import { Project } from "./Project";

export class StorageManager {
  saveProjects(projects) {
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  getStoredProjects() {
    let projects = localStorage.getItem("projects");
    if (!projects) return [];
    projects = JSON.parse(projects);

    return projects.map((projectData) => {
      const project = new Project(projectData.projectTitle);

      projectData._tasks.forEach((taskData) => {
        project.addTask(
          taskData.taskTitle,
          taskData.taskDescription,
          taskData.taskDeadline,
          taskData.taskPriority
        );
      });
      return project;
    });
  }
}
