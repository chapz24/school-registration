import { Component, OnInit } from '@angular/core';
import { SchoolService } from 'src/app/shared/services/school.service';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.scss']
})
export class SchoolListComponent implements OnInit {
  public schoolList = [];
  public searchText;

  constructor(private schoolService: SchoolService) { }

  ngOnInit() {
    this.schoolService.getSchools().subscribe(list => {
      this.schoolList = list.map(school => {
        return {
          $key: school.key,
          ...school.payload.val()
        };
      });
    });
  }

}
