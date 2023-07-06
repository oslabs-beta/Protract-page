import { Component } from '@angular/core';
import userData from '../../assets/profiles.json';
import { Team } from './team'

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  constructor() {
    this.userData = userData;
  }
  userData: Team[];
}
