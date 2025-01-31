import { Task } from "./Task";

export class Project {
  #tasks = [];
  constructor(projectTitle) {
    this.projectTitle = projectTitle;
  }

  addTask(taskTitle, taskDescription, taskDeadline, taskPriority) {
    const task = new Task(
      taskTitle,
      taskDescription,
      taskDeadline,
      taskPriority
    );
    this.#tasks.push(task);
  }

  deleteTask(index) {
    this.#tasks.splice(index, 1);
  }

  getTasks() {
    return this.#tasks;
  }
}
