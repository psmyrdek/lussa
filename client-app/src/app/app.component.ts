import { Component } from '@angular/core';
import { SocketWrapperService } from './_services/socket-wrapper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private socketWrapper: SocketWrapperService) {
    // // Initial setup
    // this.store.dispatch(new AddPlayerAction({id: uuidv4()}));

    // this.store.dispatch(new InitSuppliersAction({ noOfPlayers: 4 }));
    // this.store.dispatch(new InitBonusColorsAction());
    
    // // Round setup
    // this.store.dispatch(new InitSupplierColorsAction());

    // this.store.pipe(select('app'))
    //   .subscribe((state: AppState) => {
    //     if (shouldProceedToNextRound(state)) {
    //       alert('Next round!')
    //       this.store.dispatch(new InitSupplierColorsAction());
    //       this.store.dispatch(new MarkNextRoundAction());
    //     }
    //   })
  }

}
