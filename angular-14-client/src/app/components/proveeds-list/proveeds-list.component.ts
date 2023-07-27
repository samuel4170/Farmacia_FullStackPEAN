import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor.model';
import { TutorialService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-proveeds-list',
  templateUrl: './proveeds-list.component.html',
  styleUrls: ['./proveeds-list.component.css']
})
export class ProveedsListComponent implements OnInit {

  proveeds?: Proveedor[];
  currentTutorial: Proveedor = {};
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
          this.proveeds = data;
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

  setActiveTutorial(tutorial: Proveedor, index: number): void {
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
          this.proveeds = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}