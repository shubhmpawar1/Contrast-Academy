import { Component } from '@angular/core';
import { StatsCardComponent } from "../../components/stats-card/stats-card.component";

@Component({
  selector: 'app-dashboard.page',
  standalone: true,
  imports: [StatsCardComponent],
  templateUrl: './dashboard.page.component.html',
  styleUrl: './dashboard.page.component.css'
})
export class DashboardPageComponent {

}
