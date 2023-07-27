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
    nombre: '',
    precioU: '',
    precioD: '',
    stock: '',
    descripcion: '',
    published: false
  };
  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  saveTutorial(): void {
    const data = {
      nombre: this.producto.nombre,
      precioU: this.producto.precioU,
      precioD: this.producto.precioD,
      stock: this.producto.stock,
      descripcion: this.producto.descripcion,
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
      nombre: '',
      precioU: '',
      precioD: '',
      stock: '',
      descripcion: '',
      published: false
    };
  }

}