import { Component, Input, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})

export class StudentsComponent implements OnInit {
  @Input() studentName: string;
  @Input() studentStatus: string;
  @Input() index: number;
  @Input() id: number;

  constructor(private studentService: StudentService) { }

  getStatus() {
    return this.studentStatus;
  }

  ngOnInit(): void { }

  getColor() {
    if (this.studentStatus === 'present') {
      return 'green';
    } else if (this.studentStatus === 'absent') {
      return 'red';
    } else {
      return 'white';
    }
  }

  onSwitch() {
    if (this.studentStatus === 'present') {
      this.studentService.switchOffOne(this.index);
    } else if (this.studentStatus === 'absent') {
      this.studentService.switchOnOne(this.index);
    }
  }

}