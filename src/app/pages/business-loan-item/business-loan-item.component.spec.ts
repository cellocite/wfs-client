import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessLoanItemComponent } from './business-loan-item.component';

describe('BusinessLoanItemComponent', () => {
  let component: BusinessLoanItemComponent;
  let fixture: ComponentFixture<BusinessLoanItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessLoanItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessLoanItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
