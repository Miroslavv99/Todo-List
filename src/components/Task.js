export class Task {
  constructor(
    id,
    taskTitle,
    taskDescription,
    taskDeadline,
    taskPriority,
    taskCompleted = "PENDING"
  ) {
    this.id = id;
    this.taskTitle = taskTitle;
    this.taskDescription = taskDescription;
    this.taskDeadline = taskDeadline;
    this.taskPriority = taskPriority;
    this.taskCompleted = taskCompleted;
  }
}
