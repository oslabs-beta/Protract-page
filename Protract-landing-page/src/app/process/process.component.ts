import { Component } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent {

currGif: string = '#gif1';
currTab : string = '#tab1';

tabSwitch(tab : string, gif : string){
  document.querySelector(this.currGif)?.classList.add('hidden');
  document.querySelector(this.currTab)?.classList.remove('bg-gray-200', 'scale-95')
  document.querySelector(gif)?.classList.remove('hidden');
  document.querySelector(tab)?.classList.add('bg-gray-200', 'scale-95');
  this.currGif = gif;
  this.currTab = tab;
}
}
