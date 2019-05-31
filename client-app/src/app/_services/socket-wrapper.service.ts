import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({ providedIn: 'root' })
export class SocketWrapperService {

    constructor(private socket: Socket) {

        socket.on('player-joined', () => {
            console.log('Player has joined!')
        })

    }



}