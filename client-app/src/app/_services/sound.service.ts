import { Injectable } from '@angular/core';
import { Howl, Howler } from 'howler';
import { Action } from '@ngrx/store';
import { GameActionTypes } from '../_app-state/actions/game.actions';

@Injectable({ providedIn: 'root' })
export class SoundService {

    private sounds: any;

    constructor() {
        this.sounds = {
            fillColumn: { play: () => {} },
            take: { play: () => {} }
        }
        console.log(this.sounds);
    }

    loadSounds() {
        this.sounds.fillColumn = new Howl({
            src: [this.mapSrc('fill-column.mp3')]
        });
        this.sounds.take = new Howl({
            src: [this.mapSrc('take.mp3')]
        })
    }

    play(action: Action) {
        switch (action.type) {
            case GameActionTypes.FillColumn:
                this.sounds.fillColumn.play();
                break;
            case GameActionTypes.TakeFromSupplier:
                this.sounds.take.play();
                break;
            case GameActionTypes.TakeFromRejectedColors:
                this.sounds.take.play();
                break;
            default:
                break;
        }
    }

    private mapSrc(soundName: string) {
        return `/statics/assets/sounds/${soundName}`;
    }

}