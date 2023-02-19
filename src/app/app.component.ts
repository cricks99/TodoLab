import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ITodo } from './interfaces/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  allComplete: boolean = false;
  filterTasks: string = "";
  
  itemList: ITodo [] = [
    {task: "Take out the trash", completed: false, editingTask: false},
    {task: "Wash the car", completed: true, editingTask: false},
    {task: "Do laundry", completed: true, editingTask: false},
    {task: "Complete C# lab work for the week", completed: false, editingTask: false},
    {task: "Prepare for next assessment", completed: true, editingTask: false}
  ];

  addTask(form:NgForm) {
    let valueToAdd: string = form.form.value.task;

    if (valueToAdd)
    {
      this.itemList.push(
        {
          task: valueToAdd,
          completed: false,
          editingTask: false
        });

        this.allComplete = !this.itemList.some(x => !x.completed);
        form.reset();  //clears current value that was added from form
    }
  }

  editTask(completeId: number, form:NgForm) {
    let valueToAdd: string = form.form.value.task;

    if (valueToAdd)
      this.itemList[completeId].task = form.form.value.task;

    this.itemList[completeId].editingTask = false;
  }

  editTaskToggle(editId: number) {
    this.itemList[editId].editingTask = !this.itemList[editId].editingTask;
  }

  completeTask(completeId: number) {
    this.itemList[completeId].completed = true;
    this.allComplete = !this.itemList.some(x => !x.completed);
  }

  removeTask(removeId: number) {
    this.itemList.splice(removeId, 1);
    this.allComplete = !this.itemList.some(x => !x.completed);
  }
}