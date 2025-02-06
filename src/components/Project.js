import { Task } from "./Task";

export class Project {
  constructor(projectTitle) {
    this.projectTitle = projectTitle;
    this._tasks = [];
  }

  addTask(
    taskTitle,
    taskDescription,
    taskDeadline,
    taskPriority,
    taskCompleted
  ) {
    const task = new Task(
      taskTitle,
      taskDescription,
      taskDeadline,
      taskPriority,
      taskCompleted
    );
    this._tasks.push(task);
  }

  deleteTask(index) {
    this._tasks.splice(index, 1);
  }

  getTasks() {
    return this._tasks;
  }
}
