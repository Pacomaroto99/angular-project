import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursePageComponent } from './course-page/course-page.component';
import { NewsComponent } from './news/news.component';

const ROUTES: Routes = [
  { path: 'news', component: NewsComponent },
  { path: 'course/:title', component: CoursePageComponent, data:{animation: 'course'} },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
