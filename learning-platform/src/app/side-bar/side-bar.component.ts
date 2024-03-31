import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Course, Status } from '../models/course.model';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  @Input() sideNavOpened: boolean = false;
  allCourses: Course[] | undefined;  
  startedCourses: Course[] | undefined;
  finishedCourses: Course[] | undefined;

  constructor(private courseService: CourseService){}
  ngOnInit(): void {
    this.loadPage();
  }

  loadPage(){
    this.allCourses = this.courseService.getCourses();
    this.startedCourses = this.courseService.getCourses().filter(c => c.courseStatus === Status.Started)
    this.finishedCourses = this.courseService.getCourses().filter(c => c.courseStatus === Status.Finished)
  }
}
