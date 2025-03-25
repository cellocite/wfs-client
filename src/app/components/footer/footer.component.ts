import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SetupService } from '../../services/setup/setup.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(public setup: SetupService) { }

  nav_company = [
    {
      link: "/about-us",
      title: "About Us"
    },
    {
      link: "/faq",
      title: "Frequently Asked Questions"
    },
    {
      link: "/contact-us",
      title: "Contact Us"
    },
    {
      link: "https://blog.winchesterfundingsolution.com/business-funding",
      title: "Blogs"
    },
    {
      link: "/apply-now",
      title: "Getting a Business Loan"
    }
  ]

  nav_legal = [
    {
      link: "/privacy-policy",
      title: "Privacy Policy"
    },
    {
      link: "/terms-of-use",
      title: "Terms of Use"
    }
  ]
}
