import { Component, Input, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/venta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Proveedor } from 'src/app/models/proveedor.model';
import { Venta } from 'src/app/models/venta.model';

@Component({
  selector: 'app-venta-details',
  templateUrl: './venta-details.component.html',
  styleUrls: ['./venta-details.component.css']
})
export class VentaDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentTutorial: Venta = {
    nombre: '',
    producto: '',
    cantidad: '',
    precio: '',
    total: '',
    fecha: '',
    nit: '',
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
      producto: this.currentTutorial.producto,
      cantidad: this.currentTutorial.cantidad,
      precio: this.currentTutorial.precio,
      total: this.currentTutorial.total,
      fecha: this.currentTutorial.fecha,
      nit: this.currentTutorial.nit,
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
          this.router.navigate(['/vents']);
          this.message = res.message ? res.message : 'Informacion Eliminada!';
        },
        error: (e) => console.error(e)
      });
  }

}