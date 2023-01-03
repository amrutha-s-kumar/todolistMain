import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BackendserviceService } from '../backendservice.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {
  tid: any;
  public Coursedataarray: any;
  DeleteForm: FormGroup;
  constructor(private route: ActivatedRoute, private Fb: FormBuilder, private backendService: BackendserviceService) {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.tid = params.get('tid')
    })
    this.DeleteForm = this.Fb.group({
      tid:[''],task: [''], status: ['']
    })
  }
  ngOnInit(): void{




    this.backendService.getcoursebaseid(this.tid).subscribe((data: any) => {
      this.Coursedataarray = data;
      this.DeleteForm.setValue({
        tid:data.tid,
        task:data.task,
        status:data.status
  
      });
      //this.DeleteForm.patchValue(this.Coursedataarray)
      });
  
  
  
  
  
  
      }


      onSubmit() {
        this.backendService.deletecoursedata(this.DeleteForm.value)
  
        console.log(this.DeleteForm.value)
        }
}


