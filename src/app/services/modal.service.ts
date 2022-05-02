import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  isModalActive: boolean = false;
  modalObservable = new BehaviorSubject<boolean>(false);
  isAddModal: boolean = true;
  isAddModalObservable = new BehaviorSubject<boolean>(true);
  renderer!: Renderer2;
  selectedStudent!: Student | undefined;
  selectedStudentObservable = new BehaviorSubject<Student | undefined>(undefined);

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  getModalWatcher() {
    return this.modalObservable.asObservable();
  }

  getModalType() {
    return this.isAddModalObservable.asObservable();
  }

  openModal(isAddModalCheck: boolean = true): void {
    this.isAddModal = isAddModalCheck;
    this.isAddModalObservable.next(this.isAddModal);
    this.isModalActive = true;
    this.modalObservable.next(this.isModalActive);
    this.renderer.addClass(document.body, 'no-scroll');
  }

  closeModal(): void {
    this.isModalActive = false;
    this.modalObservable.next(this.isModalActive);
    this.renderer.removeClass(document.body, 'no-scroll');
  }

  watchSelectedStudent() {
    return this.selectedStudentObservable.asObservable();
  }

  selectStudent(student: Student): void {
    this.selectedStudent = student;
    this.selectedStudentObservable.next(this.selectedStudent);
  }

}
