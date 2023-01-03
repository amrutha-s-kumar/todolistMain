import { Component } from '@angular/core';
import { BackendserviceService } from './backendservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private backendservice:BackendserviceService){}
Dataarray: any[]=[];
ngOnInit()
{
  this.backendservice.getdata().subscribe((res) => {
          this.Dataarray = res;})
}
}
