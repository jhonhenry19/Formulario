import { Component, OnInit } from '@angular/core';
import { Users } from '../model/Twitt';

@Component({
  selector: 'app-twit',
  templateUrl: './twit.component.html',
  styleUrls: ['./twit.component.css']
})
export class TwitComponent implements OnInit {

  miTwitt: Users;

  constructor() {
    this.miTwitt = {
      name: 'Luis 15',
      Last_name: 'Morales',
      user: 'Morales15',
      twitt:'La politica de colombia esta ...'
      };
   }

  ngOnInit() {
  }

}
