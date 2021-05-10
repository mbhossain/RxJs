import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';

const students = 'Students';
const routes: Routes = [
  {
    path:'student-list', component: StudentListComponent, data: {title: students + ' List'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
export const routingComponents = [
  StudentListComponent
]
