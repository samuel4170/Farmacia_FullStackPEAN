import { Component, Input, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-producto-details',
  templateUrl: './producto-details.component.html',
  styleUrls: ['./producto-details.component.css']
})
export class ProductoDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentTutorial: Producto = {
    cod: '',
    nombre: '',
    precioU: '',
    precioD: '',
    stock: '',
    descripcion: '',
    imagen: '',
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
      cod: this.currentTutorial.cod,
      nombre: this.currentTutorial.nombre,
      precioU: this.currentTutorial.precioU,
      precioD: this.currentTutorial.precioD,
      stock: this.currentTutorial.stock,
      descripcion: this.currentTutorial.descripcion,
      imagen: this.currentTutorial.imagen,
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