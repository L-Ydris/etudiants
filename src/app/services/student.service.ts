import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class StudentService {

    studentsSubject = new Subject<any[]>();

    constructor() { }

    private students = [
        { id: 1, name: 'Ydris', status: 'present' },
        { id: 2, name: 'Yanis', status: 'absent' },
        { id: 3, name: 'Younous', status: 'present' },
    ];

    switchOffAll() {
        this.emitStudentSubject();
        for (let student of this.students) {
            student.status = 'absent';
        }
    }

    switchOnAll() {
        this.emitStudentSubject();
        for (let student of this.students) {
            student.status = 'present';
        }
    }

    switchOnOne(i: number) {
        this.emitStudentSubject();
        this.students[i].status = 'present';
    }

    switchOffOne(i: number) {
        this.emitStudentSubject();
        this.students[i].status = 'absent';
    }

    getStudentById(id: number) {
        const student = this.students.find(
            (s) => {
                return s.id === id;
            }
        );
        return student;
    }

    emitStudentSubject() {
        this.studentsSubject.next(this.students.slice());
    }

    addStudent(name: string, status: string) {
        const studentObject = {
            id: 0,
            name: "",
            status: ""
        };
        studentObject.name = name;
        studentObject.status = status;
        studentObject.id = this.students[(this.students.length - 1)].id + 1;
        this.students.push(studentObject);
        this.emitStudentSubject();
    }
}