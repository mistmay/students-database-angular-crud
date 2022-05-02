import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentsDatabaseService } from 'src/app/services/students-database.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private studentDatabase: StudentsDatabaseService, private modalService: ModalService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      surname: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      address: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      note: [''],
      date: ['', Validators.required]
    });
  }

  addStudent(): void {
    this.studentDatabase.addStudent({ ...this.form.value, id: this.studentDatabase.currentId });
    this.studentDatabase.currentId++;
    this.form.reset();
    this.modalService.closeModal();
  }

}
