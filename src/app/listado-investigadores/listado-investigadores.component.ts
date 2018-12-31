import { Component, OnInit } from '@angular/core';
import {ELEMENT_DATA} from './investigadires-mock'

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

@Component({
  selector: 'app-listado-investigadores',
  templateUrl: './listado-investigadores.component.html',
  styleUrls: ['./listado-investigadores.component.css']
})
export class ListadoInvestigadoresComponent implements OnInit {
  displayedColumns: string[] = ['name', 'surname', 'dni', 'titulation', 'center', 'cientific_area', 'department','responsable','active'];
  dataSource = ELEMENT_DATA;
  activate=true;
  constructor() { }

  ngOnInit() {
  }

}
