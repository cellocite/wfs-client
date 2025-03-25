import { Component, OnInit } from '@angular/core';
import { SetupService } from '../../services/setup/setup.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { CtaComponent } from '../../components/cta/cta.component';

@Component({
  selector: 'app-business-loan-item',
  standalone: true,
  imports: [
    UpperCasePipe,
    CommonModule
  ],
  templateUrl: './business-loan-item.component.html',
  styleUrl: './business-loan-item.component.css'
})
export class BusinessLoanItemComponent implements OnInit {
  constructor(public setup: SetupService,
    private route: ActivatedRoute
  ) { }

  item: any

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        const id = params['id'];
        this.item = this.setup.all_loan_types.filter((item: any) => item.card_link == id)[0];
      }
    )
  }

  openFaq(id: number) {
    document.getElementById("faq-" + id)?.classList.toggle("fw-semibold");
    document.getElementById("faq-btn-" + id)?.classList.toggle("open")
    document.getElementById("faq-a-" + id)?.classList.toggle("open")
  }
}
