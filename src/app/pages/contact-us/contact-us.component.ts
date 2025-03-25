import { Component } from '@angular/core';
import { SetupService } from '../../services/setup/setup.service';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  constructor(public setup: SetupService) { }
}
