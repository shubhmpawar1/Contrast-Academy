import { Component } from '@angular/core';
import { StatsCardComponent } from "../../components/stats-card/stats-card.component";
import { NavbarComponent } from "../../../../layout/navbar/navbar/navbar.component";

@Component({
  selector: 'app-dashboard.page',
  standalone: true,
  imports: [StatsCardComponent, NavbarComponent],
  templateUrl: './dashboard.page.component.html',
  styleUrl: './dashboard.page.component.css'
})
export class DashboardPageComponent {

}
