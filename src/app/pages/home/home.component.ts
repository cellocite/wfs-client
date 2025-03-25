import { Component } from '@angular/core';
import { BannerComponent } from "../../components/banner/banner.component";
import { SetupService } from '../../services/setup/setup.service';
import { CommonModule } from '@angular/common';
import { EstimateComponent } from "../../components/estimate/estimate.component";
import { CtaComponent } from '../../components/cta/cta.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent,
    CommonModule,
    EstimateComponent,
    CtaComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public setup: SetupService) { }

  banner_title = "Affordable, Reliable Capital for Every Small Business in America";
  banner_description = "Whether you’re a small business owner seeking capital or a financial institution looking to scale your lending, our funding solutions will help you bridge the gap between where you are and where you want to be.";
  banner_image = "home-banner.webp"
}
