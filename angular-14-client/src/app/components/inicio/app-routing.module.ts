import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddClienteComponent } from 'src/app/components/add-cliente/add-cliente.component';
import { ClientsListComponent } from 'src/app/components/clients-list/clients-list.component';
import { ClienteDetailsComponent } from 'src/app/components/cliente-details/cliente-details.component';

import { AddProveedorComponent } from 'src/app/components/add-proveedor/add-proveedor.component';
import { ProveedsListComponent } from 'src/app/components/proveeds-list/proveeds-list.component';
import { ProveedorDetailsComponent } from 'src/app/components/proveedor-details/proveedor-details.component';


import { AddProductoComponent } from 'src/app/components/add-producto/add-producto.component';
import { ProductsListComponent } from 'src/app/components/products-list/products-list.component';
import { ProductoDetailsComponent } from 'src/app/components/producto-details/producto-details.component';

import { TutorialsListComponent } from 'src/app/components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from 'src/app/components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from 'src/app/components/add-tutorial/add-tutorial.component';

import { VentsListComponent } from 'src/app/components/vents-list/vents-list.component';
import { VentaDetailsComponent } from 'src/app/components/venta-details/venta-details.component';
import { AddVentaComponent } from 'src/app/components/add-venta/add-venta.component';

import { inicioComponent } from 'src/app/components/inicio/inicio.component';

import { Products1ListComponent } from 'src/app/components/products1-list/products1-list.component';
import { Producto1DetailsComponent } from 'src/app/components/producto1-details/producto1-details.component';

import { AdminComponent } from 'src/app/components/admin/admin.component';

const routes: Routes = [

  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: '', redirectTo: 'clients', pathMatch: 'full' },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'clientes', component: ClientsListComponent },
  { path: 'productos', component: ProductsListComponent },
  { path: 'empleados', component: TutorialsListComponent },
  { path: 'proveedores', component: ProveedsListComponent },
  { path: 'clients/:id', component: ClienteDetailsComponent },
  { path: 'products/:id', component: ProductoDetailsComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'proveeds/:id', component: ProveedorDetailsComponent },
  { path: 'addempleado', component: AddTutorialComponent },
  { path: 'addcliente', component: AddClienteComponent },
  { path: 'addproducto', component: AddProductoComponent },
  { path: 'addproveedor', component: AddProveedorComponent },
  { path: 'farmacia', component: inicioComponent },
  { path: 'admin', component: AdminComponent },
  

  // ventas

  
  { path: 'vents/:id', component: VentaDetailsComponent },
  { path: 'ventas', component: VentsListComponent  },
  { path: 'addventa', component: AddVentaComponent },

  //listar
  
  { path: 'listaproducto', component: Products1ListComponent },
  { path: 'detalleproducto', component: Producto1DetailsComponent },

  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }