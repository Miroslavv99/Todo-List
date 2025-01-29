import { th } from "date-fns/locale";
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

  getTask() {
    return this.#tasks;
  }
}
