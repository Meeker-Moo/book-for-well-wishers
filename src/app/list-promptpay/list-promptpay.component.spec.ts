import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPromptpayComponent } from './list-promptpay.component';

describe('ListPromptpayComponent', () => {
  let component: ListPromptpayComponent;
  let fixture: ComponentFixture<ListPromptpayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPromptpayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPromptpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
