import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWellBookComponent } from './list-well-book.component';

describe('ListWellBookComponent', () => {
  let component: ListWellBookComponent;
  let fixture: ComponentFixture<ListWellBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListWellBookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListWellBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
