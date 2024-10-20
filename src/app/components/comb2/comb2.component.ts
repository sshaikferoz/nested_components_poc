import { Component } from '@angular/core';
import { Comb1Component } from '../comb1/comb1.component';
import { ImageComponent } from '../image/image.component';

@Component({
  selector: 'app-comb2',
  standalone: true,
  imports: [ImageComponent, Comb1Component],
  templateUrl: './comb2.component.html',
  styleUrl: './comb2.component.scss',
})
export class Comb2Component {}
