import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.css'
})
export class CtaComponent {
  stars = [1, 2, 3, 4, 5]
}
