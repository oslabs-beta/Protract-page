import { Component, Input } from '@angular/core';
import { Team } from "../team"

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  @Input() userData!: Team;
}
