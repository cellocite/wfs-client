import { Component } from '@angular/core';
import { SetupService } from '../../services/setup/setup.service';

@Component({
  selector: 'app-terms-of-use',
  standalone: true,
  imports: [],
  templateUrl: './terms-of-use.component.html',
  styleUrl: './terms-of-use.component.css'
})
export class TermsOfUseComponent {
  constructor(public setup: SetupService) { }
}
