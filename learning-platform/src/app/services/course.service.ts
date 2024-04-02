import { Injectable } from '@angular/core';
import { Course, Status } from '../models/course.model';
import { BehaviorSubject, Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private repo: Course[] = [
    {
      title: 'Cloud',
      icon: 'code',
      linkToPage: 'https://cloud.google.com/',
      description:
        "This overview is designed to help you understand the overall landscape of Google Cloud. Here, you'll take a brief look at some of the commonly used features and get pointers to documentation that can help you go deeper. Knowing what's available and how the parts work together can help you make decisions about how to proceed. You'll also get pointers to some tutorials that you can use to try out Google Cloud in various scenarios.Google Cloud resources Google Cloud consists of a set of physical assets, such as computers and hard disk drives, and virtual resources, such as virtual machines (VMs), that are contained in data centers around the globe. Each data center location is in a region. Regions are available in Asia, Australia, Europe, Africa, the Middle East, North America, and South America. Each region is a collection of zones, which are isolated from each other within the region. Each zone is identified by a name that combines a letter identifier with the name of the region. For example, zone a in the East Asia region is named asia-east1-a. This distribution of resources provides several benefits, including redundancy in case of failure and reduced latency by locating resources closer to clients. This distribution also introduces some rules about how resources can be used together.",
      courseStatus: Status.new,
    },
    {
      title: 'Java',
      icon: 'code',
      linkToPage: 'https://docs.oracle.com/en/java/',
      description:
        'Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is intended to let application developers write once, and run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation. Java was first released in 1995 and is widely used for developing applications for desktop, web, and mobile devices. Java is known for its simplicity, robustness, and security features, making it a popular choice for enterprise-level applications.JAVA was developed by James Gosling at Sun Microsystems Inc in the year 1995 and later acquired by Oracle Corporation. It is a simple programming language. Java makes writing, compiling, and debugging programming easy. It helps to create reusable code and modular programs. Java is a class-based, object-oriented programming language and is designed to have as few implementation dependencies as possible. A general-purpose programming language made for developers to write once run anywhere that is compiled Java code can run on all platforms that support Java. Java applications are compiled to byte code that can run on any Java Virtual Machine. The syntax of Java is similar to c/c++. History: Java’s history is very interesting. It is a programming language created in 1991. James Gosling, Mike Sheridan, and Patrick Naughton, a team of Sun engineers known as the Green team initiated the Java language in 1991. Sun Microsystems released its first public implementation in 1996 as Java 1.0. It provides no-cost -run-times on popular platforms. Java1.0 compiler was re-written in Java by Arthur Van Hoff to strictly comply with its specifications. With the arrival of Java 2, new versions had multiple configurations built for different types of platforms. In 1997, Sun Microsystems approached the ISO standards body and later formalized Java, but it soon withdrew from the process. At one time, Sun made most of its Java implementations available without charge, despite their proprietary software status. Sun generated revenue from Java through the selling of licenses for specialized products such as the Java Enterprise System.',
      courseStatus: Status.new,
    },
    {
      title: 'Kafka',
      icon: 'code',
      linkToPage: 'https://kafka.apache.org/0101/documentation.html',
      description:
        "Apache Kafka is an event streaming platform used to collect, process, store, and integrate data at scale. It has numerous use cases including distributed streaming, stream processing, data integration, and pub/sub messaging. In order to make complete sense of what Kafka does, we'll delve into what an event streaming platform is and how it works. So before delving into Kafka architecture or its core components, let's discuss what an event is. This will help explain how Kafka stores events, how to get events in and out of the system, and how to analyze event streams.",
      courseStatus: Status.new,
    },
    {
      title: 'Docker',
      icon: 'code',
      linkToPage: 'https://docs.docker.com/',
      description:
        'Docker is a set of platforms as a service (PaaS) products that use Operating system-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries, and configuration files; they can communicate with each other through well-defined channels. All containers are run by a single operating system kernel and therefore use fewer resources than a virtual machine. Docker is an open-source containerization platform by which you can pack your application and all its dependencies into a standardized unit called a container. Containers are light in weight which makes them portable and they are isolated from the underlying infrastructure and from each other container. You can run the docker image as a docker container in any machine where docker is installed without depending on the operating system.',
      courseStatus: Status.new,
    },
    {
      title: 'Kubernetes',
      icon: 'code',
      linkToPage: 'https://kubernetes.io/docs/home/',
      description:
        'Kubernetes is a portable, extensible, open source platform for managing containerized workloads and services, that facilitates both declarative configuration and automation. It has a large, rapidly growing ecosystem. Kubernetes services, support, and tools are widely available. The name Kubernetes originates from Greek, meaning helmsman or pilot. K8s as an abbreviation results from counting the eight letters between the "K" and the "s". Google open-sourced the Kubernetes project in 2014. Kubernetes combines over 15 years of Google\'s experience running production workloads at scale with best-of-breed ideas and practices from the community.',
      courseStatus: Status.finished,
    },
    {
      title: 'CI-CD',
      icon: 'code',
      linkToPage: 'https://www.geeksforgeeks.org/what-is-ci-cd/',
      description:
        'CI And CD is the practice of automating the integration of code changes from multiple developers into a single codebase. It is a software development practice where the developers commit their work frequently to the central code repository (Github or Stash). Then there are automated tools that build the newly committed code and do a code review, etc as required upon integration. The key goals of Continuous Integration are to find and address bugs quicker, make the process of integrating code across a team of developers easier, improve software quality, and reduce the time it takes to release new feature updates. Some popular CI tools are Jenkins, TeamCity, and Bamboo. Continuous Integration There could be scenarios when developers in a team, work in isolation for an extended period and only merge their changes to the master branch once their work is completed. This not only makes the merging of code very difficult, prone to conflicts, and time-consuming but also results in bugs accumulating for a long time which are only identified in later stages of development. These factors make it harder to deliver updates to customers quickly.With Continuous Integration, developers frequently commit to a shared common repository using a version control system such as Git. A continuous integration pipeline can automatically run builds, store the artifacts, run unit tests, and even conduct code reviews using tools like Sonar. We can configure the CI pipeline to be triggered every time there is a commit/merge in the codebase.',
      courseStatus: Status.finished,
    },
    {
      title: 'Jenkins',
      icon: 'code',
      linkToPage: 'https://www.jenkins.io/doc/',
      description:
        'Jenkins is a tool that is used for automation. It is mainly an open-source server that allows all the developers to build, test and deploy software. It is written in Java and runs on java only. By using Jenkins we can make a continuous integration of projects(jobs) or end-to-endpoint automation Jenkins facilitates the automation of several stages of the software development lifecycle, including application development, testing, and deployment. Operating within servlet containers like Apache Tomcat, the technology is server-based.Continuous delivery (CD) and integration (CI) pipelines can be created and managed with Jenkins. The development, testing, and deployment of software applications are automated using CI/CD pipelines. You will be able to release software more regularly and with fewer problems if you do this.',
      courseStatus: Status.started,
    },
    {
      title: 'C',
      icon: 'code',
      linkToPage: 'https://devdocs.io/c/',
      description:
        'C is a general-purpose programming language created by Dennis Ritchie at the Bell Laboratories in 1972. It is a very popular language, despite being old. The main reason for its popularity is because it is a fundamental language in the field of computer science. C is strongly associated with UNIX, as it was developed to write the UNIX operating system.',
      courseStatus: Status.started,
    },
  ];
  private behaviorSubjectRepo = new BehaviorSubject<Course[]>(this.repo);

  getCourses(): BehaviorSubject<Course[]> {
    return this.behaviorSubjectRepo;
  }

  getCourse(title: string): Observable<Course | undefined> {
    return this.getCourses().pipe(
      map((courses) => courses.find((course) => course.title === title))
    );
  }

  changeCourseStatus(title: string, status: Status) {
    let courseToChange = this.repo.find((item) => item.title === title);
    if (courseToChange) {
      courseToChange.courseStatus = status;
    }
    this.behaviorSubjectRepo.next(this.repo);
  }
}

// Get course method will look like that if there is backend api
// getCourses(): Observable<Course> {
//     return this.http.get<Course>("http://localhost8080/api/courses");
//   }
