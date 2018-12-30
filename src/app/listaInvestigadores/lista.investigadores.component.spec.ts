import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInvestigadoresComponent } from './lista.investigadores.component';

describe('ListaInvestigadoresComponent', () => {
  let component: ListaInvestigadoresComponent;
  let fixture: ComponentFixture<ListaInvestigadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaInvestigadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaInvestigadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
