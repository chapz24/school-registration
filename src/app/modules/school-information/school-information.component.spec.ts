import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolInformationComponent } from './school-information.component';
import { SchoolListComponent } from './pages/school-list/school-list.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireDatabase } from '@angular/fire/database';
import { Ng2SearchPipe } from 'ng2-search-filter';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SchoolInformationComponent', () => {
  let component: SchoolInformationComponent;
  let fixture: ComponentFixture<SchoolInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolInformationComponent, SchoolListComponent, Ng2SearchPipe ],
      imports: [FormsModule, AngularFireModule.initializeApp(environment.firebase)],
      providers: [NgbActiveModal, AngularFireDatabase],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should call AddSchool function when pressing Add New School', () => {
    const spy = spyOn(component, 'AddSchool');

    const element = fixture.nativeElement.querySelector('#add_school_btn');
    element.click();

    expect(component.AddSchool).toHaveBeenCalledTimes(1);
  });

});
