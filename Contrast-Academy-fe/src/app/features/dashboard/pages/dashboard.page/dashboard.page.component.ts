import { Component } from '@angular/core';
import { StatsCardComponent } from "../../components/stats-card/stats-card.component";
import { NavbarComponent } from "../../../../layout/navbar/navbar/navbar.component";
import { CourseCardsComponent } from "../../components/course-cards/course-cards.component";
import { TaskSectionComponent } from '../../components/task-section/task-section.component';
import { ActivityFeedComponent } from "../../components/activity-feed/activity-feed.component";

@Component({
  selector: 'app-dashboard.page',
  standalone: true,
  imports: [StatsCardComponent, NavbarComponent, CourseCardsComponent, TaskSectionComponent, ActivityFeedComponent],
  templateUrl: './dashboard.page.component.html',
  styleUrl: './dashboard.page.component.css'
})
export class DashboardPageComponent {

}
