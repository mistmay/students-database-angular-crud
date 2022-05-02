import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsDatabaseService {
  studentsList: Student[] = [];
  studentsObservable = new BehaviorSubject<Student[]>([]);
  currentId: number = 0;

  constructor() { }

  watchStudent() {
    return this.studentsObservable.asObservable();
  }

  addStudent(student: Student): void {
    this.studentsList.push(student);
    this.studentsObservable.next(this.studentsList);
    localStorage.setItem('studentsList', JSON.stringify(this.studentsList));
  }

  deleteStudent(student: Student): void {
    this.studentsList = this.studentsList.filter((element: Student) => element.id !== student.id);
    this.studentsObservable.next(this.studentsList);
    localStorage.setItem('studentsList', JSON.stringify(this.studentsList));
  }

}
