import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  selectedStudent!: Student | undefined;

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    this.modalService.watchSelectedStudent()
      .subscribe((res: Student | undefined) => {
        this.selectedStudent = res;
      });
  }

}
