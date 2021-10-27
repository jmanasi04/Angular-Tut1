import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CoursesComponent} from "./components/courses/courses.component";
import { CourseComponent } from './components/course/course.component';

//This decorator converts a plain class into a module from angular point of view
@NgModule({
  //Add all the components that are part of this module
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
