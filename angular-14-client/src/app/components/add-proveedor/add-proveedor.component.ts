import { Component } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor.model';
import { TutorialService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-proveedor.component.html',
  styleUrls: ['./add-proveedor.component.css']
})
export class AddProveedorComponent {

  proveedor : Proveedor = {
    nombre: '',
    apellido: '',
    direccion: '',
    nit: '',
    codigo: '',
    pais: '',
    published: false
  };
  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  saveTutorial(): void {
    const data = {
      nombre: this.proveedor.nombre,
      apellido: this.proveedor.apellido,
      direccion: this.proveedor.direccion,
      nit: this.proveedor.nit,
      codigo: this.proveedor.codigo,
      pais: this.proveedor.pais,
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
    this.proveedor = {
      nombre: '',
      apellido: '',
      direccion: '',
      nit: '',
      codigo: '',
      pais: '',
      published: false
    };
  }

}