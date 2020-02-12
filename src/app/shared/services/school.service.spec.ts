import { TestBed, inject } from '@angular/core/testing';

import { SchoolService } from './school.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabase } from '@angular/fire/database';
// import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/Observable/of';
import { School } from '../modals/school';
import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { Observable } from 'rxjs/internal/Observable';


const schoolList = [
  {
    $key: 'M-cZmOODq8vS8c9tBi2',
    schoolName: 'Test School',
    street: 'Test street',
    suburb: 'Test suburb',
    postcode: '1234',
    state: 'Test state',
    email: 'test@abc.com',
    phoneNumber: '1234567890',
    registeredCount: 123
  },
  {
    $key: 'M-c_6YnN731rcUo6JB5',
    schoolName: 'Test School1',
  street: 'Test street1',
  suburb: 'Test suburb1',
  postcode: '1235',
  state: 'Test state1',
  email: 'test@abc1.com',
  phoneNumber: '1234567891',
  registeredCount: 1231
},
  {
    $key: 'M-caawHPlwGpqIg-__uL',
    schoolName: 'Test School2',
  street: 'Test street2',
  suburb: 'Test suburb2',
  postcode: '1232',
  state: 'Test state2',
  email: 'test@abc2.com',
  phoneNumber: '1234567892',
  registeredCount: 1232
}
];

const angularFireDatabaseStub = { list: () => of (schoolList) };
// let mockSchools$ = Observable.(schoolList);

describe('SchoolService', () => {
  // spyOn(angularFireDatabaseStub, 'list').and.returnValue(mockSchools$);
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp(environment.firebase)],
      providers: [SchoolService, {provide: AngularFireDatabase, useValue: angularFireDatabaseStub} ],
      schemas: [NO_ERRORS_SCHEMA]
    })
  );

  it('should be created', () => {
    const service: SchoolService = TestBed.get(SchoolService);
    expect(service).toBeTruthy();
  });

  it('#getSchools', inject([SchoolService], (service: SchoolService) => {
    const schools$ = service.getSchools();
    schools$.subscribe(school => {
      expect(school[0].key).toEqual(schoolList[0].$key);
      expect(school[0]).toEqual(jasmine.any(School));
    });
  }));

  it('saves school information to the db', () => {

  });

});
