import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocketIoModule } from 'ngx-socket-io';
import { AppComponent } from './app.component';
import { PlayersContainerComponent } from './players/players-container/players-container.component';
import { SuppliersContainerComponent } from './suppliers/suppliers-container/suppliers-container.component';
import { FieldContainerComponent } from './field/field-container/field-container.component';
import { StageComponent } from './stage/stage.component';
import { SupplierComponent } from './suppliers/supplier/supplier.component';
import { ColumnsComponent } from './field/columns/columns.component';
import { ColumnComponent } from './field/column/column.component';
import { RejectedColorsComponent } from './suppliers/rejected-colors/rejected-colors.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './_app-state/app.reducer';
import { PlayerHandComponent } from './field/player-hand/player-hand.component';
import { PlayerActionsComponent } from './field/player-actions/player-actions.component';
import { TopbarComponent } from './topbar/topbar.component';
import { AppRouterModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { BonusColorsComponent } from './bonus-colors/bonus-colors.component';
import { ScoreSummaryComponent } from './score-summary/score-summary.component';
import { HttpClientModule } from '@angular/common/http'
import { EffectsModule } from '@ngrx/effects'
import { GameEffects } from './_app-state/effects/game.effects';
import { PlayerNavComponent } from './player-nav/player-nav.component';
import { SoundEffects } from './_app-state/effects/sound.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { RejectedColorsWarningComponent } from './dialogs/rejected-colors-warning/rejected-colors-warning.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { ForeignColumnWarningComponent } from './dialogs/foreign-column-warning/foreign-column-warning.component';
import { JokerColumnQuestionComponent } from './dialogs/joker-column-question/joker-column-question.component';
import { PreviewBonusColorsComponent } from './dialogs/preview-bonus-colors/preview-bonus-colors.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersContainerComponent,
    SuppliersContainerComponent,
    FieldContainerComponent,
    StageComponent,
    SupplierComponent,
    ColumnsComponent,
    ColumnComponent,
    RejectedColorsComponent,
    PlayerHandComponent,
    PlayerActionsComponent,
    TopbarComponent,
    HomeComponent,
    GameComponent,
    BonusColorsComponent,
    ScoreSummaryComponent,
    PlayerNavComponent,
    RejectedColorsWarningComponent,
    ForeignColumnWarningComponent,
    JokerColumnQuestionComponent,
    PreviewBonusColorsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
    StoreModule.forRoot({ app: appReducer }),
    EffectsModule.forRoot([GameEffects, SoundEffects]),
    SocketIoModule.forRoot({
      url: '/',
      options: {
        transports: ['websocket'],
        upgrade: false,
        forceNew: true
      }
    }),
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 1000 } }
  ],
  entryComponents: [
    RejectedColorsWarningComponent,
    ForeignColumnWarningComponent,
    JokerColumnQuestionComponent,
    PreviewBonusColorsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
