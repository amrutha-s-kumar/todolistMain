import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendserviceService } from '../backendservice.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  constructor(private backendservice:BackendserviceService,private fb: FormBuilder,private router: Router){
    
  }
  Dataarray: any[]=[];
  DiaryEntryForm = this.fb.group({  task: [''],  status: ['']  })
  ngOnInit()
  {
    this.backendservice.getdata().subscribe((res) => {
            this.Dataarray = res;})
  }

  OnSubmit()
  {
    console.log(this.DiaryEntryForm.value);
      this.backendservice.insertcoursedata(this. DiaryEntryForm.value)
      this.router.navigate(['app']);
  }
}
