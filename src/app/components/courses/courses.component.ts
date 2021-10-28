import {Component} from "@angular/core";

//This is a plain typescript class. To make this class identify as a component, angular uses 'Decorators'
@Component({
  //One or more properties as arguments so that angular knows how this component works. One such property is 'Selectors'
  selector: 'courses', //element referenced: 'courses'; element with a specific class refrenced: '.courses'; element with a specific id refrenced: '#courses';
  //contains HTML markup to be rendered for this component
  template: `
    <h2>{{title}}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
  `
})
export class CoursesComponent {
  title = "List of courses";
  courses = ;
}
