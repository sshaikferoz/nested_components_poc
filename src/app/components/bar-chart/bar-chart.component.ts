import { Component } from '@angular/core';

import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss',
})
export class BarChartComponent {
  chartData = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81],
        backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#EF5350'],
      },
    ],
  };
}
