import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoInvestigadoresComponent } from './listado-investigadores.component';

describe('ListadoInvestigadoresComponent', () => {
  let component: ListadoInvestigadoresComponent;
  let fixture: ComponentFixture<ListadoInvestigadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoInvestigadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoInvestigadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
