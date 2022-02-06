import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Observable } from 'rxjs-compat/Observable';
import 'rxjs-compat/add/observable/interval';
import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  lastUptdate = new Date();
  title = 'etudiants';
  isAuth = false;
  students = new Array();
  secondes: number;
  counterSubscription: Subscription;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {

    const counter = Observable.interval(1000);
    this.counterSubscription = counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('An error occured ! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );
  }

  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe();
  }

  allPresent() {
    this.studentService.switchOffAll();
    return alert('Ils sont tous là !');
  }

  allAbsent() {
    if (confirm('Etes-vous sûr qu\'ils sont tous absents ?')) {
      this.studentService.switchOffAll();
    }
    return '';
  }

}