import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPortifolioComponent } from './item-portifolio.component';

describe('ItemPortifolioComponent', () => {
  let component: ItemPortifolioComponent;
  let fixture: ComponentFixture<ItemPortifolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemPortifolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemPortifolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
