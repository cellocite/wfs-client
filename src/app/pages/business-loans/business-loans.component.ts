import { Component } from '@angular/core';
import { EstimateComponent } from "../../components/estimate/estimate.component";
import { CtaComponent } from "../../components/cta/cta.component";
import { CommonModule } from '@angular/common';
import { SetupService } from '../../services/setup/setup.service';

@Component({
  selector: 'app-business-loans',
  standalone: true,
  imports: [
    EstimateComponent, 
    CtaComponent,
    CommonModule
  ],
  templateUrl: './business-loans.component.html',
  styleUrl: './business-loans.component.css'
})
export class BusinessLoansComponent {
  constructor(public setup: SetupService) { }
}
