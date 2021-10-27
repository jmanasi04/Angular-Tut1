import {Component} from "@angular/core";

//This is a plain typescript class. To make this class identify as a component, angular uses 'Decorators'
@Component({
  //One or more properties as arguments so that angular knows how this component works. One such property is 'Selectors'
  selector: 'courses', //element referenced: 'courses'; element with a specific class refrenced: '.courses'; element with a specific id refrenced: '#courses';
  template:'<h2>Courses</h2>' //contains HTML markup to be rendered for this component
})
export class CoursesComponent {

}
