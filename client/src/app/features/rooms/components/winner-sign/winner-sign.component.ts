import { Component, Input, OnInit } from '@angular/core';
import { RoomStateService } from '../../services/room-state.service';

@Component({
  selector: 'winner-sign',
  templateUrl: './winner-sign.component.html',
  styleUrls: ['./winner-sign.component.sass']
})
export class WinnerSignComponent implements OnInit {

  name: string | undefined = undefined;

  constructor(private roomStateService: RoomStateService) { }

  ngOnInit(): void {
    this.roomStateService.newWinner$.subscribe(
      winner => {
        console.log(`Updating 'name' attribute of sign: ${winner}`);
        this.name = winner;
      }
    );
  }
  
  gotWinner(){
    return !(this.name === undefined || this.name === "");
  }

}
