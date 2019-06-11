import { Component } from '@angular/core';
import { SoundService } from './_services/sound.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private soundService: SoundService
  ) {
    
  }

  ngOnInit() {
    this.soundService.loadSounds();
  }

}
