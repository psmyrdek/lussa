import { Injectable } from '@angular/core';
import { Howl, Howler } from 'howler';
import { Action } from '@ngrx/store';
import { GameActionTypes } from '../_app-state/actions/game.actions';

@Injectable({ providedIn: 'root' })
export class SoundService {

    private sounds: any;

    constructor() {
        this.sounds = {
            fillColumn: { play: () => {} }
        }
        console.log(this.sounds);
    }

    loadSounds() {
        this.sounds.fillColumn = new Howl({
            src: [this.mapSrc('fill-column.mp3')]
        })
    }

    play(action: Action) {
        switch (action.type) {
            case GameActionTypes.FillColumn:
                this.sounds.fillColumn.play();
                break;
            default:
                break;
        }
    }

    private mapSrc(soundName: string) {
        return `/statics/assets/sounds/${soundName}`;
    }

}