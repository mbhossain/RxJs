import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  // public listOfStudent = [{
  //   id: "920",
  //   name: "Sobiul Islam",
  //   dept: "CSE",
  //   session: "2009-2010",
  //   roll: "0914043"
  // }];

  constructor() { }

  ngOnInit(): void {

    //pratice_01
    // of(1, 2, 3)
    //   // .pipe(map(x => x * x))
    //   .pipe(first())
    //   .subscribe(v => console.log(`value: ${v}`));

    //pratice_02
    const observable = Observable.create(function (observer) {
      observer.next(1);
      observer.next(2);
    })
    function subscriber(value) {
      console.log(`got value: ` + value);
    }
    observable.subscribe(subscriber);
  }

}
