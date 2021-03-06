import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameMetadata } from '../_models/GameMetadata';

@Injectable({ providedIn: 'root' })
export class GamesService {

    constructor(private http: HttpClient) {}

    createNewGame(): Observable<GameMetadata> {
        return this.http.post<GameMetadata>(`/api/game`, {})
    }

}