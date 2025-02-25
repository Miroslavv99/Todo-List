import { Task } from "./Task";

export class Project {
  constructor(id, projectTitle) {
    this.id = id;
    this.projectTitle = projectTitle;
    this.tasks = [];
  }

  addTask(
    taskTitle,
    taskDescription,
    taskDeadline,
    taskPriority,
    taskCompleted
  ) {
    const task = new Task(
      crypto.randomUUID(),
      taskTitle,
      taskDescription,
      taskDeadline,
      taskPriority,
      taskCompleted
    );
    this.tasks.push(task);
  }

  deleteTask(taskID) {
    this.tasks = this.tasks.filter((task) => task.id !== taskID);
  }

  getTasks() {
    return this.tasks;
  }
}
