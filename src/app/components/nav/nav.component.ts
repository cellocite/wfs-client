import { Component } from '@angular/core';
import { SetupService } from '../../services/setup/setup.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(public setup: SetupService) { }

  navs = [
    {
      title: "Business Loans",
      link: "/business-loans"
    },
    {
      title: "FAQs",
      link: "/faq"
    },
    {
      title: "Why Choose Us",
      link: "/about-us"
    },
    {
      title: "Contact Us",
      link: "/contact-us"
    }
  ]

  isNavMobileOpen = false;
}
