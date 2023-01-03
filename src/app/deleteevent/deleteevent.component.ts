import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BackendserviceService } from '../backendservice.service';

@Component({
  selector: 'app-deleteevent',
  templateUrl: './deleteevent.component.html',
  styleUrls: ['./deleteevent.component.scss']
})
export class DeleteeventComponent {
  eid: any;
  public Coursedataarray: any;
  EventEntryForm: FormGroup;
  constructor(private route: ActivatedRoute, private Fb: FormBuilder, private backendService: BackendserviceService) {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.eid = params.get('eid')
    })
    this.EventEntryForm= this.Fb.group({
      eid:[],
      
      sdate: [''], 
      edate:[''],
      time:[''],
      title:[''],
      description:[''],
      status: ['']
    })
  }
  ngOnInit(): void{




    this.backendService.getcoursebaseid(this.eid).subscribe((data: any) => {
      this.Coursedataarray = data;
      console.log("NGON"+data)
      this.EventEntryForm.setValue({
        eid:data.eid,
        
        sdate: data.sdate, 
        edate:data.edate,
        time:data.time,
        title:data.title,
        description:data.description,
        status: data.status
  
      });
      //this.DeleteForm.patchValue(this.Coursedataarray)
      console.log(this.EventEntryForm.value)
      });
      }
      onSubmit() {
        this.backendService.deleteeventdata(this.EventEntryForm.value)
  
        console.log("NGON"+this.EventEntryForm.value)
        }

}
