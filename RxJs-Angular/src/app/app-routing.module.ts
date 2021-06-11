import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './students/components/student-list/student-list.component';

export const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'students',
        loadChildren: () => import('./students/students.module').then(m=>m.StudentsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

