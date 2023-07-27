import { Component } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { TutorialService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent {

  cliente: Cliente = {
    nombre: '',
    apellido: '',
    direccion: '',
    telefono: '',
    nit: '',
    published: false
  };
  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  saveTutorial(): void {
    const data = {
      nombre: this.cliente.nombre,
      apellido: this.cliente.apellido,
      direccion: this.cliente.direccion,
      telefono: this.cliente.telefono,
      nit: this.cliente.nit,
    };

    this.tutorialService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newTutorial(): void {
    this.submitted = false;
    this.cliente = {
      nombre: '',
      apellido: '',
      direccion: '',
      telefono: '',
      nit: '',
      published: false
    };
  }

}