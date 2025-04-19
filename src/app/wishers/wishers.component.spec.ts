import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishersComponent } from './wishers.component';

describe('WishersComponent', () => {
  let component: WishersComponent;
  let fixture: ComponentFixture<WishersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
