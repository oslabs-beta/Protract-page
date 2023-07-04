import { Component, Input } from '@angular/core';
import { Features } from '../features';

@Component({
  selector: 'app-card-features',
  templateUrl: './card-features.component.html',
  styleUrls: ['./card-features.component.scss']
})
export class CardFeaturesComponent {
  @Input() cardFeatures!: Features
}
