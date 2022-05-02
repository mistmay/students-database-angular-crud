import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @ViewChild('modal') modal!: ElementRef;
  isAddModal!: boolean;

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    this.modalService.getModalType()
      .subscribe((res: boolean) => {
        this.isAddModal = res;
      })
  }

  closeModalChecker(event: Event): void {
    if (event.target !== this.modal.nativeElement) {
      return;
    } else {
      this.modalService.closeModal();
    }
  }

}
