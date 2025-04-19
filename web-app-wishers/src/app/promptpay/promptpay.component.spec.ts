import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptpayComponent } from './promptpay.component';

describe('PromptpayComponent', () => {
  let component: PromptpayComponent;
  let fixture: ComponentFixture<PromptpayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromptpayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromptpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
