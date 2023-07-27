import { Component, Input, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/venta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto.model';
import { Venta } from 'src/app/models/venta.model';

@Component({
  selector: 'app-producto1-details',
  templateUrl: './producto1-details.component.html',
  styleUrls: ['./producto1-details.component.css']
})
export class Producto1DetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentTutorial: Producto = {
    nombre: '',
    precioU: '',
    precioD: '',
    stock: '',
    descripcion: '',
    published: false
  };
  message = '';

  constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTutorial(this.route.snapshot.params["id"]);
    }
  }

  getTutorial(id: string): void {
    this.tutorialService.get(id)
      .subscribe({
        next: (data) => {
          this.currentTutorial = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePublished(status: boolean): void {
    const data = {
      nombre: this.currentTutorial.nombre,
      precioU: this.currentTutorial.precioU,
      precioD: this.currentTutorial.precioD,
      stock: this.currentTutorial.stock,
      descripcion: this.currentTutorial.descripcion,
      published: status
    };

    this.message = '';

    this.tutorialService.update(this.currentTutorial.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentTutorial.published = status;
          this.message = res.message ? res.message : 'Informacion Actulizada con Exito!';
        },
        error: (e) => console.error(e)
      });
  }

  updateTutorial(): void {
    this.message = '';

    this.tutorialService.update(this.currentTutorial.id, this.currentTutorial)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Informacion Actulizada con Exito!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteTutorial(): void {
    this.tutorialService.delete(this.currentTutorial.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/products']);
          this.message = res.message ? res.message : 'Informacion Eliminada!';
        },
        error: (e) => console.error(e)
      });
  }

  
}


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