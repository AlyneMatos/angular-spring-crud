import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesModule } from './courses/courses.module';
import { CoursesComponent } from './courses/courses/courses.component';

const routes: Routes = [
  { path: '',pathMatch: 'full' ,redirectTo: 'courses'},
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }