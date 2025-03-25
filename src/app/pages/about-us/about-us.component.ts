import { Component } from '@angular/core';
import { EstimateComponent } from "../../components/estimate/estimate.component";
import { CtaComponent } from "../../components/cta/cta.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [EstimateComponent, CtaComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
