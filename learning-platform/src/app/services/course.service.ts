import { Injectable } from '@angular/core';
import { Course, Status } from '../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor() {}

  getCourses(): Course[] {
    return [
      {
        title: 'Cloud',
        icon: 'code',
        linkToPage: 'https://www.google.com',
        description: 'Google',
        courseStatus: Status.NotTouched,
      },
      {
        title: 'Java',
        icon: 'code',
        linkToPage: 'https://www.google.com',
        description: 'Google',
        courseStatus: Status.NotTouched,
      },
      {
        title: 'Kafka',
        icon: 'code',
        linkToPage: 'https://www.google.com',
        description: 'Google',
        courseStatus: Status.NotTouched,
      },
      {
        title: 'Docker',
        icon: 'code',
        linkToPage: 'https://www.google.com',
        description: 'Google',
        courseStatus: Status.NotTouched,
      },
      {
        title: 'Kubernetes',
        icon: 'code',
        linkToPage: 'https://www.google.com',
        description: 'Google',
        courseStatus: Status.Finished,
      },
      {
        title: 'CI-CD',
        icon: 'code',
        linkToPage: 'https://www.google.com',
        description: 'Google',
        courseStatus: Status.Finished,
      },
      {
        title: 'Jenkins',
        icon: 'code',
        linkToPage: 'https://www.google.com',
        description: 'Google',
        courseStatus: Status.Started,
      },
      {
        title: 'C',
        icon: 'code',
        linkToPage: 'https://www.google.com',
        description: 'Google',
        courseStatus: Status.Started,
      },
    ];
  }
}

// Get course method will look like that if there is backend api
// getCourses(): Observable<Course> {
//     return this.http.get<Course>("http://localhost8080/api/courses");
//   }
