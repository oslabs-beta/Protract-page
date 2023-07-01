import { Component } from '@angular/core';
import { Features } from './features'
import cardFeatures  from '../../assets/cardFeatures.json'

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
  constructor(){
    this.cardFeatures = cardFeatures
  }
  cardFeatures: Features[]
}
