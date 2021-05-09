import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routingComponents, StudentsRoutingModule } from './students-routing.module';
import { StudentListComponent } from './components/student-list/student-list.component';


@NgModule({
  declarations: [
    StudentListComponent,
    routingComponents
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
