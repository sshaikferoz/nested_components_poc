import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CalendarModule, FormsModule, FloatLabelModule, CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {
  date: Date[] | undefined;
}
