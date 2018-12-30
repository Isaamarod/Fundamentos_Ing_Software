import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  surname: string;
  dni: string;
  titulation: string;
  center: string;
  cientific_area: string;
  department: string;
  responsable: boolean;
  active: boolean;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Alejandro', surname: 'Linares Barranco', dni: '40238944N', titulation: 'Ingenieria Indistrial', center:'ETSII', cientific_area:'ciencia y tecnologia', department:'ATC', responsable:false, active:true },
  {name: 'Ale', surname: ' Barranco', dni: '4023N', titulation: 'Ingenieria ', center:'ETSII', cientific_area:'y tecnologia', department:'ATC', responsable:true, active:true },
];
@Component({
  selector: 'app-listado-investigadores',
  templateUrl: './listado-investigadores.component.html',
  styleUrls: ['./listado-investigadores.component.css']
})
export class ListadoInvestigadoresComponent implements OnInit {
  displayedColumns: string[] = ['name', 'surname', 'dni', 'titulation', 'center', 'cientific_area', 'department','responsable','active'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
