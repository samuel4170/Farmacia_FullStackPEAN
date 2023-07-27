import { Component } from '@angular/core';
import { Venta } from 'src/app/models/venta.model';
import { TutorialService } from 'src/app/services/venta.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-venta.component.html',
  styleUrls: ['./add-venta.component.css']
})
export class AddVentaComponent {
  venta: Venta = {
    nombre: '',
    producto: '',
    cantidad: '',
    precio: '',
    total: '',
    fecha: '',
    nit: '',
    published: false
  };
  
  submitted = false;
//   sumar(){
//     this.total = parseInt(this.cantidad)+(parseInt(this.precio);
// }
  constructor(private tutorialService: TutorialService) { }

  saveTutorial(): void {
    const data = {
      nombre: this.venta.nombre,
      producto: this.venta.producto,
      cantidad: this.venta.cantidad,
      precio: this.venta.precio,
      total: this.venta.total,
      fecha : this.venta.fecha ,
      nit: this.venta.nit,
      
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
    this.venta = {
      nombre: '',
      producto: '',
      cantidad: '',
      precio: '',
      total: '',
      fecha: '',
      nit: '',
      published: false
      
    };
    
  }

}