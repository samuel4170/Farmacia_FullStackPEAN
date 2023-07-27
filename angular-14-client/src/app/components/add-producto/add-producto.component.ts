import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { TutorialService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent {

  producto: Producto = {
    cod: '',
    nombre: '',
    precioU: '',
    precioD: '',
    stock: '',
    descripcion: '',
    imagen: '',
    published: false
  };
  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  saveTutorial(): void {
    const data = {
      cod: this.producto.cod,
      nombre: this.producto.nombre,
      precioU: this.producto.precioU,
      precioD: this.producto.precioD,
      stock: this.producto.stock,
      descripcion: this.producto.descripcion,
      imagen: this.producto.imagen
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
    this.producto = {
      cod: '',
      nombre: '',
      precioU: '',
      precioD: '',
      stock: '',
      descripcion: '',
      imagen: '',
      published: false
    };
  }

}