import { Component } from '@angular/core';
import { LeftSidebarComponent } from "../../components/left-sidebar/left-sidebar.component";

@Component({
  selector: 'app-course-page',
  standalone: true,
  imports: [LeftSidebarComponent],
  templateUrl: './course-page.component.html',
  styleUrl: './course-page.component.css'
})
export class CoursePageComponent {

}
