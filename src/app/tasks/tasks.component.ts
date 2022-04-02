import { Component, OnInit } from '@angular/core';
import { DisciplinaService } from '../disciplina.service';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(public disciplina: DisciplinaService) {
    
   }

  ngOnInit() {
  }

}