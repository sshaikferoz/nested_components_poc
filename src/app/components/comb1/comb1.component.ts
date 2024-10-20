import { Component } from '@angular/core';
import { CalendarComponent } from '../calendar/calendar.component';
import { BarChartComponent } from '../bar-chart/bar-chart.component';

@Component({
  selector: 'app-comb1',
  standalone: true,
  imports: [BarChartComponent, CalendarComponent],
  templateUrl: './comb1.component.html',
  styleUrl: './comb1.component.scss',
})
export class Comb1Component {}
