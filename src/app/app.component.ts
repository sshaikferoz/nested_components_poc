import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ImageComponent } from './components/image/image.component';
import { Comb2Component } from './components/comb2/comb2.component';
import { Comb1Component } from './components/comb1/comb1.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    BarChartComponent,
    CalendarComponent,
    ImageComponent,
    Comb2Component,
    Comb1Component,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  components = [
    'app-bar-chart',
    'app-calendar',
    'app-image',
    'app-comb1',
    'app-comb2',
  ];
  title = 'nested_components';
  getComponent(componentName: string): any {
    const componentMap: { [key: string]: any } = {
      'app-bar-chart': BarChartComponent,
      'app-calendar': CalendarComponent,
      'app-image': ImageComponent,
      'app-comb1': Comb1Component,
      'app-comb2': Comb2Component,
    };
    return componentMap[componentName];
  }
}
