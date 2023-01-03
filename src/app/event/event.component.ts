import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendserviceService } from '../backendservice.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {constructor(private backendservice:BackendserviceService,private fb: FormBuilder,private router: Router){
    
}
Dataarray: any[]=[];
EventEntryForm = this.fb.group({
  
  sdate:[''],
  edate:[''],
  time:[''],
  title:[''],
  description:[''], 
  status: [''] 
 })
ngOnInit()
{
  this.backendservice.geteventdata().subscribe((res) => {
          this.Dataarray = res;})
}

OnSubmit()
{
  console.log(this.EventEntryForm.value);
    this.backendservice.inserteventdata(this. EventEntryForm.value)
    this.router.navigate(['event']);
}

}
