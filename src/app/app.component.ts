
import { Component, Input, Output } from '@angular/core';
import { UndoneModel } from './modals/undoneModel';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'to-do-bo';
  @Output() tasksList:UndoneModel[]=[];
  @Input() complatedTask:UndoneModel[]=[]
  
  task:string="";
  constructor(private toastr: ToastrService) {}

  addTask(task:string){
    if(task!=""){
      let date=new Date()
      let day= date.getDate();
      let month= date.getMonth()+1;
      let year= date.getFullYear();
      let item= new UndoneModel(task, (day.toString()+"/"+ month.toString()+"/" + year.toString()));
      item.task=this.task;
      this.tasksList.push(item);
      this.task=""
    } else{
      this.toastr.error("Please Add Task")
    }
    
  }
}
