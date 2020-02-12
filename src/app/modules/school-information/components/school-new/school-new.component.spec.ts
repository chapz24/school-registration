import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolNewComponent } from './school-new.component';
import { FormsModule, ReactiveFormsModule, SelectControlValueAccessor } from '@angular/forms';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabase } from '@angular/fire/database';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { School } from 'src/app/shared/modals/school';
import { SchoolService } from 'src/app/shared/services/school.service';

describe('SchoolNewComponent', () => {
  let component: SchoolNewComponent;
  let fixture: ComponentFixture<SchoolNewComponent>;

  const schoolInfo: School = {
    $key: '',
    schoolName: 'Test School',
    street: 'Test street',
    suburb: 'Test suburb',
    postcode: '1234',
    state: 'Test state',
    email: 'test@abc.com',
    phoneNumber: '1234567890',
    registeredCount: 123
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolNewComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        AngularFireModule.initializeApp(environment.firebase)
      ],
      providers: [NgbActiveModal, AngularFireDatabase, SchoolService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('is form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  fit('is form valid when filled with validations', () => {
    component.form.setValue(schoolInfo);

    expect(component.form.valid).toBeTruthy();
  });

  fit('should call Save function when pressing Submit', () => {
    component.form.setValue(schoolInfo);
    fixture.detectChanges();

    const spy = spyOn(component, 'Save');

    const element = fixture.nativeElement.querySelector('#save_school_btn');
    element.click();

    expect(component.Save).toHaveBeenCalledTimes(1);
  });

});
