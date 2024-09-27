import { TasksService } from './../tasks.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true })
  userId!: string;

  @Output()
  close = new EventEmitter<void>();

  @Output()
  add = new EventEmitter<NewTaskData>();

  constructor(private taskService: TasksService) {}

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancelAddTask() {
    this.close.emit();
  }

  onSubmit() {
    this.taskService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDate,
      },
      this.userId
    );
    this.close.emit();
  }
}
