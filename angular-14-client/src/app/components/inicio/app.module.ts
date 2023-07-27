import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';

import { AddClienteComponent } from 'src/app/components/add-cliente/add-cliente.component';
import { ClienteDetailsComponent } from 'src/app/components/cliente-details/cliente-details.component';
import { ClientsListComponent } from 'src/app/components/clients-list/clients-list.component';

import { AddTutorialComponent } from 'src/app/components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from 'src/app/components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from 'src/app/components/tutorials-list/tutorials-list.component';

import { inicioComponent } from 'src/app/components/inicio/inicio.component';

import { AdminComponent } from 'src/app/components/admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    AddClienteComponent,
    TutorialDetailsComponent,
    ClienteDetailsComponent,
    TutorialsListComponent,
    ClientsListComponent,
    inicioComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
