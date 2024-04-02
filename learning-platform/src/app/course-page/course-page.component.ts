import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CourseService } from '../services/course.service';
import { Course, Status } from '../models/course.model';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css'],
})
export class CoursePageComponent implements OnInit {
  course$!: Observable<Course | undefined>;

  constructor(private route: ActivatedRoute, private service: CourseService) {}

  ngOnInit(): void {
    this.course$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getCourse(params.get('title')!)
      )
    );
  }

  openLink(pageLink: string): void {
    window.open(pageLink, '_blank');
  }

  addToCurrent(title: string): void {
    this.service.changeCourseStatus(title, Status.started);
  }

  addToFinished(title: string): void {
    this.service.changeCourseStatus(title, Status.finished);
  }
}
