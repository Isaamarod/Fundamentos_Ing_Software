import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ExampleComponent } from './example/example.component';
import { AppComponent } from './app.component';
import {ListaInvestigadoresComponent} from './listaInvestigadores/lista.investigadores.component';
import {ListadoInvestigadoresComponent} from './listado-investigadores/listado-investigadores.component';

import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    ListaInvestigadoresComponent,
    ListadoInvestigadoresComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */