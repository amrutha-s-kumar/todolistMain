import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DeleteComponent } from './delete/delete.component';
import { DeleteeventComponent } from './deleteevent/deleteevent.component';
import { EventComponent } from './event/event.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [{path:'app',component:TodoComponent},{path:'delete/:tid',component:DeleteComponent},
{path:'event',component:EventComponent},{path:'deleteevent/:eid',component:DeleteeventComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
