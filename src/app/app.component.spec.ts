import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SchoolInformationComponent } from './modules/school-information/school-information.component';
import { SchoolListComponent } from './modules/school-information/pages/school-list/school-list.component';
import { SchoolNewComponent } from './modules/school-information/components/school-new/school-new.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { Ng2SearchPipe } from 'ng2-search-filter';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, SchoolInformationComponent, SchoolListComponent, SchoolNewComponent, Ng2SearchPipe],
      imports: [FormsModule, ReactiveFormsModule, NgbModule, AngularFireModule.initializeApp(environment.firebase)],
      providers: [NgbActiveModal, AngularFireDatabase, AngularFireModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  fit(`should have as title 'School Registration'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('School Registration');
  });

});
