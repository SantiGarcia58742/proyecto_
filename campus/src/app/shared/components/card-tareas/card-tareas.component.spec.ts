import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTareasComponent } from './card-tareas.component';

describe('CardTareasComponent', () => {
  let component: CardTareasComponent;
  let fixture: ComponentFixture<CardTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTareasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
