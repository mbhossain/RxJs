import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservableRxjsRoutingModule } from './observable-rxjs-routing.module';
import { ObservableRxjsComponent } from './components/observable-rxjs/observable-rxjs.component';


@NgModule({
  declarations: [
    ObservableRxjsComponent
  ],
  imports: [
    CommonModule,
    ObservableRxjsRoutingModule
  ]
})
export class ObservableRxjsModule { }
