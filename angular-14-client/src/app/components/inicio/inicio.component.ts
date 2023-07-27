import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { TutorialService } from 'src/app/services/cliente.service';
import { ClientsListComponent } from 'src/app/components/clients-list/clients-list.component';



@Component({
  selector: 'app-inicio',
  templateUrl: './index.html',
  styleUrls: ['./style.css']
})
export class inicioComponent {
}

const routes: Routes = [

  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: '', redirectTo: 'clients', pathMatch: 'full' },
  { path: 'clientes', component: ClientsListComponent },
  { path: 'inicio', component: inicioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }