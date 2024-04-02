import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursePageComponent } from './course-page/course-page.component';
import { NewsComponent } from './news/news.component';

const ROUTES: Routes = [
    {path: '', component: NewsComponent},
  { path: 'news', component: NewsComponent },
  { path: 'course/:title', component: CoursePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
