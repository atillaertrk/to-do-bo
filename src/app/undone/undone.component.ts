import { Component, Input, OnInit, Output } from '@angular/core';
import { UndoneModel } from '../modals/undoneModel';

@Component({
  selector: 'app-undone',
  templateUrl: './undone.component.html',
  styleUrls: ['./undone.component.scss']
})
export class UndoneComponent {
  @Input() taskList:UndoneModel[]=[]
  @Input() complatedTask:UndoneModel[]=[]
  move(i:UndoneModel){
    this.complatedTask.push(i)
    let index=this.taskList.indexOf(i)
    this.taskList.splice(index,1)
  }
  delete(event:UndoneModel){
    let index=this.taskList.indexOf(event)
    this.taskList.splice(index,1)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
