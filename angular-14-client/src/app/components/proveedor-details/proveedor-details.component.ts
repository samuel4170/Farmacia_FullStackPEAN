import { Component, Input, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/proveedor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Proveedor } from 'src/app/models/proveedor.model';

@Component({
  selector: 'app-proveedor-details',
  templateUrl: './proveedor-details.component.html',
  styleUrls: ['./proveedor-details.component.css']
})
export class ProveedorDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentTutorial: Proveedor = {
    nombre: '',
    apellido: '',
    direccion: '',
    nit: '',
    codigo: '',
    pais: '',
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
      apellido: this.currentTutorial.apellido,
      direccion: this.currentTutorial.direccion,
      nit: this.currentTutorial.nit,
      codigo: this.currentTutorial.codigo,
      pais: this.currentTutorial.pais,
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
          this.router.navigate(['/proveeds']);
          this.message = res.message ? res.message : 'Informacion Eliminada!';
        },
        error: (e) => console.error(e)
      });
  }

}