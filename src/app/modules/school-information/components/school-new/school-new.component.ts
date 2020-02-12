import { Component, OnInit } from '@angular/core';
import { SchoolService } from 'src/app/shared/services/school.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-school-new',
  templateUrl: './school-new.component.html',
  styleUrls: ['./school-new.component.scss']
})
export class SchoolNewComponent implements OnInit {
  public formControls = this.schoolService.form.controls;
  public submitted: boolean;
  public form = this.schoolService.form;

  constructor(
    public activeModal: NgbActiveModal,
    private schoolService: SchoolService
  ) {}

  ngOnInit() {
    if (this.schoolService.form.get('$key').value == null) {
      this._resetValues();
    }
  }

  Save() {
    if (this.schoolService.form.valid) {
      if (this.schoolService.form.get('$key').value == null) {
        // insert new school information
        this.schoolService
          .insertSchool(this.schoolService.form.value);
      } else {
        // update existing school information
      }
      this._resetValues();
      this.activeModal.close();
    }
  }

  private _resetValues() {
    this.schoolService.form.reset();
    this.schoolService.form.setValue({
      $key: null,
      schoolName: '',
      street: '',
      suburb: '',
      postcode: '',
      state: '',
      email: '',
      phoneNumber: '',
      registeredCount: ''
    });
  }
}
