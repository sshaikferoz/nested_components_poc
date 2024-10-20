import { Component } from '@angular/core';

import { ImageModule } from 'primeng/image';
@Component({
  selector: 'app-image',
  standalone: true,
  imports: [ImageModule],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
})
export class ImageComponent {}
