import { Component } from '@angular/core';
import { NavbarComponent } from '../../../../layout/navbar/navbar/navbar.component';
import { CourseCataloogComponent } from '../../components/course-cataloog/course-cataloog.component';

@Component({
  selector: 'app-course-page',
  standalone: true,
  imports: [NavbarComponent, CourseCataloogComponent],
  templateUrl: './course-page.component.html',
  styleUrl: './course-page.component.css'
})
export class CoursePageComponent {

}
