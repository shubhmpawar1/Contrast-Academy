import { Component } from '@angular/core';
import { NavbarComponent } from '../../../../layout/navbar/navbar/navbar.component';
import { CourseCataloogComponent } from '../../components/course-cataloog/course-cataloog.component';

@Component({
  selector: 'app-course-catalog',
  standalone: true,
  imports: [NavbarComponent, CourseCataloogComponent],
  templateUrl: './course-catalog.page.html',
  styleUrl: './course-catalog.page.css'
})
export class CourseCatalogPageComponent {

}
