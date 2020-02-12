import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SchoolNewComponent } from './components/school-new/school-new.component';

@Component({
  selector: 'app-school-information',
  templateUrl: './school-information.component.html',
  styleUrls: ['./school-information.component.scss']
})
export class SchoolInformationComponent implements OnInit {

  constructor(private _modalService: NgbModal) { }

  ngOnInit() {
  }

  public AddSchool(): void {
    this._getSchoolDetailComponentModal();
  }

  private _getSchoolDetailComponentModal() {
    const modalComponent = this._modalService.open(SchoolNewComponent, {
      size: 'lg',
      windowClass: 'view-modal',
      backdrop: 'static',
      centered: false
    });
    return modalComponent;
  }

}
