import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameMetadata } from '../_models/GameMetadata';
import { AppState } from '../_app-state/state';

@Injectable({ providedIn: 'root' })
export class GamesService {

    constructor(private http: HttpClient) {}

    createNewGame(): Observable<GameMetadata> {
        return this.http.post<GameMetadata>(`/api/game`, {})
    }

    joinGame(gameId: string): Observable<AppState> {
        return this.http.post<AppState>(`/api/game/${gameId}/join`, {})
    }

}