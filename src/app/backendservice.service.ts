import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BackendserviceService {

  constructor(private http: HttpClient,private router: Router) { }
  getdata() {
    return this.http.get<any>('https://localhost:44320/api/Todo/viewdata')

  }
getcoursebaseid(did: any) {
  return this.http.get<any>('https://localhost:44320/api/Todo/ViewdataByid/' + did)

  }
  insertcoursedata(data: any) {
    this.http.post("https://localhost:44320/api/Todo/insEntry", data).toPromise().then(result =>
    {
  console.log(data); console.log(result); alert("Value Inserted Suceesfully !!");this.router.navigate(['app']); })

}

deletecoursedata(data:any) {


  this.http.post("https://localhost:44320/api/Todo/Delete",data).toPromise().then(result =>
  { console.log(result); alert("Value Deleted Suceesfully !!"); this.router.navigate(['app']);})

}
inserteventdata(data: any) {
  this.http.post("https://localhost:44320/api/Event/insEntry", data).toPromise().then(result =>
  {
console.log(data); console.log(result); alert("Value Inserted Suceesfully !!");this.router.navigate(['event']); })

}
 geteventdata() {
    return this.http.get<any>('https://localhost:44320/api/Event/viewdata')

  }
  deleteeventdata(data:any) {


    this.http.post("https://localhost:44320/api/Event/eventDelete",data).toPromise().then(result =>
    { console.log(result); alert("Value Deleted Sucessfully !!"); this.router.navigate(['event']);})

  }
}
