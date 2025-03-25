import { CommonModule, CurrencyPipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-estimate',
  standalone: true,
  imports: [
    CurrencyPipe,
    CommonModule,
    FormsModule
  ],
  templateUrl: './estimate.component.html',
  styleUrl: './estimate.component.css'
})
export class EstimateComponent implements AfterViewInit {
  @ViewChild('slider') slider!: ElementRef<HTMLInputElement>;
  minAmount = 10000;
  minLoanAmount = 17000;
  maxAmount = 2000000;
  amount = this.minAmount;
  loanAmount = this.minLoanAmount
  trackWidth = 0;
  trackStyle = '';

  ngAfterViewInit() {
    // Call updateTrackWidth only after the view has been initialized
    setTimeout(() => this.updateTrackWidth(), 0);
  }

  updateTrackWidth() {
    if (!this.slider?.nativeElement) return;
    this.loanAmount = (this.minLoanAmount / this.minAmount) * this.amount;

    const trackWidth = this.slider.nativeElement.clientWidth; // Get full track width
    const thumbWidth = 20; // Always subtract 10px
    const maxFillWidth = trackWidth - thumbWidth;

    // Calculate percentage fill
    let percentage = ((this.amount - this.minAmount) / (this.maxAmount - this.minAmount)) * 100;
    let fillWidth = (percentage * (trackWidth - thumbWidth)) / 100 + thumbWidth / 2;

    // Ensure fill width stays within range
    // fillWidth = Math.max(0, Math.min(fillWidth, maxFillWidth));

    // Apply the gradient background
    this.trackStyle = `linear-gradient(to right, 
      var(--secondary-300) 0%, 
      var(--secondary-300) ${fillWidth}px, 
      var(--secondary-100) ${fillWidth}px, 
      var(--secondary-100) 100%)`;
  }
}
