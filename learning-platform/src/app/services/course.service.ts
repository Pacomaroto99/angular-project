import { Injectable } from '@angular/core';
import { Course, Status } from '../models/course.model';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private dummyDescription: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut ante aliquam, vehicula mi in, euismod erat. In ultricies molestie nunc, id euismod sapien consequat id. Nam placerat urna elit, sed pretium purus molestie id. Donec risus velit, faucibus eget ipsum nec, placerat rhoncus odio. Praesent tincidunt mi ultrices fermentum vehicula. Pellentesque luctus pulvinar bibendum. Ut venenatis quam sit amet urna vestibulum, et iaculis diam elementum. Suspendisse laoreet et sapien id sodales. Nullam pellentesque sapien non dolor pellentesque, a suscipit ante congue. Sed auctor vestibulum nunc, quis eleifend leo convallis ut. Etiam lacus urna, luctus sit amet lacus ut, tincidunt pharetra tortor. Nullam sit amet est arcu. Pellentesque feugiat velit non ligula cursus, eu placerat ex consequat. Morbi vehicula, quam ac sagittis dignissim, quam sem euismod mauris, vitae maximus diam metus vitae turpis. Nullam dapibus fermentum mauris vulputate iaculis. Duis turpis lectus, interdum et ligula eu, consectetur elementum dolor. Nulla id nulla ipsum. Praesent molestie tempor ante, eget sodales tortor dignissim ac. Nunc mauris metus, tempus at pulvinar a, dapibus sit amet tellus. Quisque at eros sit amet massa lacinia vehicula. Fusce sit amet gravida ante. Curabitur consectetur ac nibh ut tempus. Vestibulum sit amet ipsum ut justo pharetra eleifend. Vestibulum semper neque sagittis, consequat est ac, hendrerit ante. Sed ante lectus, tincidunt at turpis aliquet, cursus rhoncus ipsum. Mauris quis eros eu tortor faucibus tempor. Donec mollis, tellus mattis dictum vehicula, urna lacus efficitur risus, a malesuada ipsum felis eu lacus. Suspendisse auctor ligula id interdum accumsan. Nulla porttitor, leo vitae molestie rutrum, turpis tellus commodo nisi, et convallis magna mauris in ipsum. Proin lorem sem, tincidunt sed laoreet at, euismod rutrum nisl. Donec vitae metus lacus. Fusce sodales neque id tellus vestibulum, id eleifend turpis tincidunt. In a turpis quis arcu posuere tristique. Pellentesque lacus augue, pellentesque vitae lorem vel, feugiat tempus justo. Nam ullamcorper a ipsum pellentesque venenatis. Cras nec mauris feugiat, sagittis mi non, dignissim nisl.Fusce venenatis feugiat ultrices. Ut ullamcorper, tortor sit amet finibus feugiat, ligula ipsum tempor augue, at imperdiet metus risus sed enim. In pharetra vestibulum lacus eget auctor. Sed sit amet elit ante. Suspendisse finibus tempus lacinia. Integer ultricies dignissim nulla, non placerat orci elementum eu. Donec dolor quam, gravida sed ex eget, consequat congue ipsum.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam vestibulum ante id aliquet ultrices. Aenean non porta nisl. Phasellus molestie urna nec sapien vestibulum tincidunt. Praesent cursus dignissim bibendum. Maecenas feugiat fringilla suscipit. Mauris ornare metus turpis, sit amet varius neque malesuada eget. Duis sit amet accumsan justo. Suspendisse egestas, libero vel dictum euismod, arcu mauris mattis magna, eget lacinia velit quam ac ligula. Aliquam viverra elit tellus, vel euismod arcu consectetur et. Quisque nulla lectus, pulvinar sed dolor sed, varius luctus orci. Proin accumsan fermentum sodales. Maecenas metus diam, iaculis ut feugiat sed, feugiat quis erat.';
  private repo: Course[] = [
    {
      title: 'Cloud',
      icon: 'code',
      linkToPage: 'https://www.google.com',
      description: this.dummyDescription,
      courseStatus: Status.NotTouched,
    },
    {
      title: 'Java',
      icon: 'code',
      linkToPage: 'https://www.google.com',
      description: this.dummyDescription,
      courseStatus: Status.NotTouched,
    },
    {
      title: 'Kafka',
      icon: 'code',
      linkToPage: 'https://www.google.com',
      description: this.dummyDescription,
      courseStatus: Status.NotTouched,
    },
    {
      title: 'Docker',
      icon: 'code',
      linkToPage: 'https://www.google.com',
      description: this.dummyDescription,
      courseStatus: Status.NotTouched,
    },
    {
      title: 'Kubernetes',
      icon: 'code',
      linkToPage: 'https://www.google.com',
      description: this.dummyDescription,
      courseStatus: Status.Finished,
    },
    {
      title: 'CI-CD',
      icon: 'code',
      linkToPage: 'https://www.google.com',
      description: this.dummyDescription,
      courseStatus: Status.Finished,
    },
    {
      title: 'Jenkins',
      icon: 'code',
      linkToPage: 'https://www.google.com',
      description: this.dummyDescription,
      courseStatus: Status.Started,
    },
    {
      title: 'C',
      icon: 'code',
      linkToPage: 'https://www.google.com',
      description: this.dummyDescription,
      courseStatus: Status.Started,
    },
  ];
  constructor() {}

  getCourses(): Observable<Course[]> {
    return of(this.repo);
  }

  getCourse(title: string): Observable<Course | undefined> {
    return this.getCourses().pipe(
      map(courses => courses.find(course => course.title === title))
    );
  }

//   changeCourse(course: Course) {
//     let courseToChange = this.repo.find((item) => item.title === course.title);
//     if (courseToChange) {
//       courseToChange.courseStatus = course.courseStatus;
//     }
    // this.repo = this.repo.filter(item => item.title !== course.title);
//     // this.repo.push(course)
//   }
}

// Get course method will look like that if there is backend api
// getCourses(): Observable<Course> {
//     return this.http.get<Course>("http://localhost8080/api/courses");
//   }
