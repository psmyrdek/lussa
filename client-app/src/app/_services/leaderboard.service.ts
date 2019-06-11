import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LeaderboardSummaryComponent } from '../dialogs/leaderboard-summary/leaderboard-summary.component';

@Injectable({ providedIn: 'root' })
export class LeaderboardService {

    constructor(private dialog: MatDialog) { }

    showLeaderboard() {
        this.dialog.open(LeaderboardSummaryComponent, {
            disableClose: true
        });
    }

}