import { Component, OnInit } from '@angular/core';
import { ModalService } from './services/modal.service';
import { StudentsDatabaseService } from './services/students-database.service';
import { Student } from './models/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'students-database';
  isModalActive!: boolean;

  constructor(private modalService: ModalService, private studentDatabase: StudentsDatabaseService) { }

  ngOnInit(): void {
    this.modalService.getModalWatcher()
      .subscribe((res: boolean) => {
        this.isModalActive = res;
      });
    if (localStorage['studentsList']) {
      const localStorageArray = JSON.parse(localStorage.getItem('studentsList') || "");
      if (localStorageArray.length > 0) {
        localStorageArray.forEach((element: Student) => {
          this.studentDatabase.addStudent(element);
        });
        this.studentDatabase.currentId = this.studentDatabase.studentsList[this.studentDatabase.studentsList.length - 1].id + 1;
      }
    }
  }
}
