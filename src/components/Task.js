export class Task {
  constructor(
    taskTitle,
    taskDescription,
    taskDeadline,
    taskPriority,
    taskCompleted = "PENDING"
  ) {
    this.taskTitle = taskTitle;
    this.taskDescription = taskDescription;
    this.taskDeadline = taskDeadline;
    this.taskPriority = taskPriority;
    this.taskCompleted = taskCompleted;
  }
}
