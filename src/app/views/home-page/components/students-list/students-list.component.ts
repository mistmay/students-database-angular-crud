import { Component, OnInit } from '@angular/core';
import { StudentsDatabaseService } from 'src/app/services/students-database.service';
import { ModalService } from 'src/app/services/modal.service';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {
  searchedKey: string = '';
  studentsList!: Student[];

  constructor(private studentDatabase: StudentsDatabaseService, private modalService: ModalService) { }

  ngOnInit(): void {
    this.studentDatabase.watchStudent()
      .subscribe((res: Student[]) => {
        this.studentsList = res;
      });
  }

  selectStudent(student: Student): void {
    this.modalService.selectStudent(student);
    this.modalService.openModal(false);
  }

  deleteStudent(student: Student): void {
    this.studentDatabase.deleteStudent(student);
  }

}
