import { Component } from '@angular/core';
import { GamesService } from '../_services/games.service';
import { GameMetadata } from '../_models/GameMetadata';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private gamesService: GamesService,
    private router: Router
  ) {}

  createNewGame() {
    this.gamesService.createNewGame()
      .subscribe(
        (metadata: GameMetadata) => {
          this.router.navigate(['game', metadata.gameId]);
        },
        (err) => {
          alert('Cannot create new game!')
        }
      )
  }

}
