import { Component } from '@angular/core';
import { SetupService } from '../../services/setup/setup.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.css'
})
export class PrivacyPolicyComponent {
  constructor(public setup: SetupService) { }
}
