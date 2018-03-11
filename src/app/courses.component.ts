import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component ({
    selector: 'courses',
    templateUrl: './courses.component.html'
})

export class CoursesComponent {
    courses : string[];
    email = "me@example.com";
    title = "List of Courses"

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }
    
    onKeyUp() {
        console.log(this.email);
    }
}