import { Component } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent {

  tutorial: Tutorial = {
    nombre: '',
    apellido: '',
    direccion: '',
    telefono: '',
    puesto: '',
    salario: '',
    nit: '',
    published: false
  };
  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  saveTutorial(): void {
    const data = {
      nombre: this.tutorial.nombre,
      apellido: this.tutorial.apellido,
      direccion: this.tutorial.direccion,
      telefono: this.tutorial.telefono,
      puesto: this.tutorial.puesto,
      salario: this.tutorial.salario,
      nit: this.tutorial.nit
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
    this.tutorial = {
      nombre: '',
      apellido: '',
      direccion: '',
      telefono: '',
      puesto: '',
      salario: '',
      nit: '',
      published: false
    };
  }

}