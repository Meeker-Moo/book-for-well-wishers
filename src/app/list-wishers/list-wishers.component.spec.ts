import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWishersComponent } from './list-wishers.component';

describe('ListWishersComponent', () => {
  let component: ListWishersComponent;
  let fixture: ComponentFixture<ListWishersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListWishersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListWishersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
