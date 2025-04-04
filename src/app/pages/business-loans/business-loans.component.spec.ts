import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessLoansComponent } from './business-loans.component';

describe('BusinessLoansComponent', () => {
  let component: BusinessLoansComponent;
  let fixture: ComponentFixture<BusinessLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessLoansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
