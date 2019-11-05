var btnmenu = document.getElementById ("btn-menu")
var nav  = document.getElementById ("nav")

btnmenu.addEventListener("click", function(){
    nav.classList.toggle("mostrar")
})

import { Component } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  value: number = 40;
  highValue: number = 60;
  options: Options = {
    floor: 0,
    ceil: 1000000
  };
}
