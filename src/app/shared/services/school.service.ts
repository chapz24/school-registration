import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { School } from '../modals/school';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  schoolList: AngularFireList<any>;
  constructor(
    private _firebase: AngularFireDatabase
  ) {}

  form = new FormGroup({
    $key: new FormControl(null),
    schoolName: new FormControl('', [
      Validators.required,
      Validators.maxLength(200)
    ]),
    street: new FormControl('', Validators.required),
    suburb: new FormControl('', Validators.required),
    postcode: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    state: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    phoneNumber: new FormControl('', Validators.minLength(10)),
    registeredCount: new FormControl('', Validators.required)
  });

  public getSchools() {
    this.schoolList = this._firebase.list('schools');
    return this.schoolList.snapshotChanges();
  }

  public insertSchool(school: School) {
    return this.schoolList
      .push({
        schoolName: school.schoolName,
        street: school.street,
        suburb: school.suburb,
        postcode: school.postcode,
        state: school.state,
        email: school.email,
        phoneNumber: school.phoneNumber,
        registeredCount: school.registeredCount
      })
      .then(res => {
        // this._notificationService.CreateSuccess('School Added Successfully.');
      })
      .catch(error => {
        this.errorMgmt(error);
      });
  }

  // Error management
  private errorMgmt(error) {
    console.log(error);
  }
}
