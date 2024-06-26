# Learning Platform

The Learning Platform is a web application designed to help users navigate and track various learning courses. Built with Angular and Angular Material, it features a dynamic sidebar for easy course navigation, a header for site-wide controls, and separate pages for news and detailed course information.

## Technologies

- **Visual Studio Code** - as an IDE during the development process
- **Angular** - for the front-end framework
- **Angular Material** - for UI components and styling
- **Git** - for source control management and documentation

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 12 or later)
- [Angular CLI](https://angular.io/cli) (version 10 or later)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/learning-platform.git
   cd learning-platform
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Application

To run the application locally:

```bash
ng serve
```

Navigate to `http://localhost:4200/` in your web browser to view the application.

## Project Structure

```
learning-platform/
├── .editorconfig
├── .gitignore
├── angular.json
├── package-lock.json
├── package.json
├── README.md
├── src/
│   ├── app/
│   │   ├── app-routing.modul.ts
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── course-page/
│   │   │   ├── course-page.component.css
│   │   │   ├── course-page.component.html
│   │   │   ├── course-page.component.spec.ts
│   │   │   ├── course-page.component.ts
│   │   ├── header/
│   │   │   ├── header.component.css
│   │   │   ├── header.component.html
│   │   │   ├── header.component.spec.ts
│   │   │   ├── header.component.ts
│   │   ├── models/
│   │   │   ├── course.model.ts
│   │   │   ├── news.model.ts
│   │   ├── news/
│   │   │   ├── news.component.css
│   │   │   ├── news.component.html
│   │   │   ├── news.component.spec.ts
│   │   │   ├── news.component.ts
│   │   ├── services/
│   │   │   ├── course.service.ts
│   │   │   ├── news.service.ts
│   │   ├── side-bar/
│   │   │   ├── side-bar.component.css
│   │   │   ├── side-bar.component.html
│   │   │   ├── side-bar.component.spec.ts
│   │   │   ├── side-bar.component.ts
│   ├── assets/
│   │   ├── .gitkeep
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── styles.css
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
```

## Components

### AppComponent

The root component that initializes the application.

### SideBarComponent

A sidebar for easy navigation through different sections of the application.

### HeaderComponent

A header containing site-wide controls and navigation links.

### NewsComponent

Displays the latest news and updates related to the courses.

### CoursePageComponent

Shows detailed information about a specific course.

## Services

### CourseService

Handles fetching and managing course data.

### NewsService

Handles fetching and displaying news related to courses.

## Models

### Course

Represents a course with its details like title, description, duration, and more.

### News

Represents a news item with a title, content, and date.

## Dependencies

- **Angular** - Front-end framework
- **Angular Material** - UI components
- **RxJS** - Reactive programming with observables
- **TypeScript** - Superset of JavaScript for type safety and modern features
- **SCSS** - CSS preprocessor for better styling management
