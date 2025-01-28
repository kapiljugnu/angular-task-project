import { Component, EventEmitter, Output } from "@angular/core";
import { NewTask } from "../task/task.model";

@Component({
    selector: 'app-new-task',
    templateUrl: './new-task.component.html',
    styleUrl: './new-task.component.css'
})
export class NewTaskComponent{
    @Output() cancel = new EventEmitter<void>();
    @Output() add = new EventEmitter<NewTask>();
    enteredTitle = '';
    enteredSummary = '';
    enteredDate = '';


    onCancel() {
        this.cancel.emit();
    }

    onSubmit() {
        this.add.emit({ title: this.enteredTitle, summary: this.enteredTitle, date: this.enteredDate})
    }
}