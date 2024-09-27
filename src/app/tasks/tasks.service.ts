import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from './../dummyTask';
import { NewTaskData, Task } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks: Task[] = DUMMY_TASKS;

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.filterTasks({ userId });
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.push({
      ...taskData,
      id: `t${Number(this.tasks[this.tasks.length - 1].id.split('')[1]) + 1}`,
      userId: userId,
    });

    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.filterTasks({ id });

    this.saveTasks();
  }

  private filterTasks(userData: { id?: string; userId?: string }): Task[] {
    if (userData?.id) {
      return this.tasks.filter((task) => task.id !== userData.id);
    }
    return this.tasks.filter((task) => task.userId === userData.userId);
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
