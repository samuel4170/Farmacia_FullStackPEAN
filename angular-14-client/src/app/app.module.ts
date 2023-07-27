import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddClienteComponent } from './components/add-cliente/add-cliente.component';
import { ClienteDetailsComponent } from './components/cliente-details/cliente-details.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';

import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';

import { AddProductoComponent } from './components/add-producto/add-producto.component';
import { ProductoDetailsComponent } from './components/producto-details/producto-details.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

import { AddProveedorComponent } from './components/add-proveedor/add-proveedor.component';
import { ProveedorDetailsComponent } from './components/proveedor-details/proveedor-details.component';
import { ProveedsListComponent } from './components/proveeds-list/proveeds-list.component';

import { VentsListComponent } from './components/vents-list/vents-list.component';
import { VentaDetailsComponent } from './components/venta-details/venta-details.component';
import { AddVentaComponent } from './components/add-venta/add-venta.component';


import { inicioComponent } from './components/inicio/inicio.component';

import { AdminComponent } from 'src/app/components/admin/admin.component';


import { Products1ListComponent } from './components/products1-list/products1-list.component';
import { Producto1DetailsComponent } from './components/producto1-details/producto1-details.component';

import { quienesComponent } from 'src/app/components/quienes/add-quienes.component';

import { segurosComponent } from 'src/app/components/seguros/add-quienes.component';


import { CompraDetailsComponent } from './components/venta1-details/venta1-details.component';
import { ComprsListComponent } from './components/vents1-list/vents1-list.component';



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
    AddProductoComponent,
    ProductsListComponent,
    ProductoDetailsComponent,
    AddProveedorComponent,
    ProveedorDetailsComponent,
    ProveedsListComponent,
    VentsListComponent,
    VentaDetailsComponent,
    AddVentaComponent,
    Products1ListComponent,
    Producto1DetailsComponent,
    AdminComponent,
    quienesComponent,
    CompraDetailsComponent,
    ComprsListComponent,
    segurosComponent
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
