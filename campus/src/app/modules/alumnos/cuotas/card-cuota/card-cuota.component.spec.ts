import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCuotaComponent } from './card-cuota.component';

describe('CardCuotaComponent', () => {
  let component: CardCuotaComponent;
  let fixture: ComponentFixture<CardCuotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCuotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCuotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
