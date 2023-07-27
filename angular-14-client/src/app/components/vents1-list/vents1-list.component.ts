import { Component, OnInit } from '@angular/core';
import { Venta } from 'src/app/models/venta.model';
import { TutorialService } from 'src/app/services/venta.service';

@Component({
  selector: 'app-vents1-list',
  templateUrl: './vents1-list.component.html',
  styleUrls: ['./vents1-list.component.css']
})
export class ComprsListComponent implements OnInit {

  vents?: Venta[];
  currentTutorial: Venta = {};
  currentIndex = -1;
  description = '';

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.tutorialService.getAll()
      .subscribe({
        next: (data) => {
          this.vents = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveTutorials();
    this.currentTutorial = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: Venta, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.tutorialService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchTitle(): void {
    this.currentTutorial = {};
    this.currentIndex = -1;

    this.tutorialService.findByTitle(this.description)
      .subscribe({
        next: (data) => {
          this.vents = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}