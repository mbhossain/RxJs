import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './students/components/student-list/student-list.component';

const routes: Routes = [
  // {path: 'students', loadChildren: () => import('app/students/students.module').then(m => m.StudentsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  StudentListComponent
]
