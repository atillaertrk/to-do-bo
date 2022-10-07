import { Component, Input, OnInit } from '@angular/core';
import { UndoneModel } from '../modals/undoneModel';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit {
  @Input() complatedTask:UndoneModel[]=[]
  delete(event:UndoneModel){
    let index=this.complatedTask.indexOf(event)
    this.complatedTask.splice(index,1)
  }
  constructor() { 
  
    
  }

  ngOnInit(): void {
  }
  
}
