import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFeaturesComponent } from './card-features.component';

describe('CardFeaturesComponent', () => {
  let component: CardFeaturesComponent;
  let fixture: ComponentFixture<CardFeaturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardFeaturesComponent]
    });
    fixture = TestBed.createComponent(CardFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
