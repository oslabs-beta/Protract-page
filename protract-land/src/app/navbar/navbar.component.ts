import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  nav : string = 'bars';
  menu(){
    let list = document.querySelector('#nav-items');
    if(list !== null){
      this.nav === 'bars' ? (this.nav = 'opened',list.classList.add('top-[80px]'), list.classList.add('opacity-100')): (this.nav = 'bars',list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'));
    }
}
}
