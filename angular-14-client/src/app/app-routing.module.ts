import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddClienteComponent } from './components/add-cliente/add-cliente.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { ClienteDetailsComponent } from './components/cliente-details/cliente-details.component';

import { AddProveedorComponent } from './components/add-proveedor/add-proveedor.component';
import { ProveedsListComponent } from './components/proveeds-list/proveeds-list.component';
import { ProveedorDetailsComponent } from './components/proveedor-details/proveedor-details.component';


import { AddProductoComponent } from './components/add-producto/add-producto.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductoDetailsComponent } from './components/producto-details/producto-details.component';

import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';

import { VentsListComponent } from './components/vents-list/vents-list.component';
import { VentaDetailsComponent } from './components/venta-details/venta-details.component';
import { AddVentaComponent } from './components/add-venta/add-venta.component';


import { CompraDetailsComponent } from './components/venta1-details/venta1-details.component';
import { ComprsListComponent } from './components/vents1-list/vents1-list.component';


import { inicioComponent } from './components/inicio/inicio.component';

import { Products1ListComponent } from './components/products1-list/products1-list.component';
import { Producto1DetailsComponent } from './components/producto1-details/producto1-details.component';

import { AdminComponent } from 'src/app/components/admin/admin.component';

import { quienesComponent } from 'src/app/components/quienes/add-quienes.component';


import { segurosComponent } from 'src/app/components/seguros/add-quienes.component';

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

  //ofertas
  
  { path: 'quienes', component: quienesComponent },

  //
  
  { path: 'seguros', component: segurosComponent },

  //compras
  { path: 'detallecompra', component: CompraDetailsComponent },
  { path: 'listacompra', component: ComprsListComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }