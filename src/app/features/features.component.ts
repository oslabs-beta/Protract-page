import { Component } from '@angular/core';
import { Features } from './features';
import cardFeatures  from '../../assets/cardFeatures.json';
import AOS from 'aos';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
  constructor(){
    this.cardFeatures = cardFeatures
  }
  ngOnInit(){
    AOS.init({
      once : true,
      offset : 200,
      duration : 500,
      disable: 'mobile',
    });
  }
  cardFeatures: Features[]
}
