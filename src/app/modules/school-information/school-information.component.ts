import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SchoolNewComponent } from './components/school-new/school-new.component';

@Component({
  selector: 'app-school-information',
  templateUrl: './school-information.component.html',
  styleUrls: ['./school-information.component.scss']
})
export class SchoolInformationComponent implements OnInit {

  public showMessage: boolean;
  public successMessage = 'School Details saved successfully.';
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  public AddSchool(): void {
    this.getSchoolDetailComponentModal().result.then(
      result => {
        this.showMessage = true;
        setTimeout(() => {
          this.showMessage = false
        }, 3000);
      }
    );
  }

  private getSchoolDetailComponentModal() {
    const modalComponent = this.modalService.open(SchoolNewComponent, {
      size: 'lg',
      windowClass: 'view-modal',
      backdrop: 'static',
      centered: false
    });
    return modalComponent;
  }

}
