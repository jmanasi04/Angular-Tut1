import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CoursesComponent} from "./components/courses/courses.component";
import {CourseComponent} from './components/course/course.component';
import {CoursesService} from "./services/courses.service";
import {AuthorsComponent} from './components/authors/authors.component';
import {AuthorsService} from "./services/authors.service";

//This decorator converts a plain class into a module from angular point of view
@NgModule({
  //Add all the components that are part of this module
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule
  ],
  //Should contain all the dependencies that all the components in the project depend upon
  //When providers provided here only single instance of each of this service is created and shared by the project
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
