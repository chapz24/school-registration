import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolListComponent } from './school-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { Ng2SearchPipe } from 'ng2-search-filter';
import { AngularFireDatabase } from '@angular/fire/database';
import { SchoolService } from 'src/app/shared/services/school.service';
import { of } from 'rxjs';
import { SchoolNewComponent } from '../../components/school-new/school-new.component';
import { School } from 'src/app/shared/modals/school';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SchoolListComponent', () => {
  let component: SchoolListComponent;
  let fixture: ComponentFixture<SchoolListComponent>;

  let componentNew: SchoolNewComponent;
  let fixtureNew: ComponentFixture<SchoolNewComponent>;

  const testSchool = [
    'Victoria High School',
    'Old Street',
    'Brussels',
    '1234',
    'Victoria',
    'vicHigh@vic.au',
    '0987654321',
    8790
  ];

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
      declarations: [SchoolListComponent, SchoolNewComponent, Ng2SearchPipe],
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
    fixture = TestBed.createComponent(SchoolListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixtureNew = TestBed.createComponent(SchoolNewComponent);
    componentNew = fixtureNew.componentInstance;
    fixtureNew.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('the inserted record shouls be available', () => {

    componentNew.form.setValue(schoolInfo);
    fixtureNew.detectChanges();
    expect(componentNew.form.valid).toBeTruthy();

    const service: SchoolService = TestBed.get(SchoolService);
    service.getSchools().subscribe(list => {
      component.schoolList = list.map(school => {
        return {
          $key: school.key,
          ...school.payload.val()
        };
      });
      expect(component.schoolList).toBeDefined();
      expect(component.schoolList).toContain(testSchool);
    });
  });
});
