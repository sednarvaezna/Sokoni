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
  value: number = 10;
  highValue: number = 100;
  options: Options = {
    floor: 0,
    ceil: 300
  };
}


<!-- seccion de los rangos 6-nov -->

function (){
  var parent = document.querySelector(".price-slider")
  if(parent) return

  var
    rangeS = parent.querySelectorAll()
    numberS = parent.querySelectorAll()

  rangeS.forEach(function(el){
    el.oninput = function() {
      var slide1 = parseFloat(rangeS[0].value),
          slide2 = parseFloat(rangeS[1].value)

      if (slide1 > slide2){
        [slide1, slide2] = [slide2, slide1]
      }

      numberS[0].value = slide1
      numberS[1].value = slide2
    }
  })

  numberS.forEach()function(el){
    el.oninput = function(){
      var number1 = parseFloat(numberS[0].value),
          number2 = parseFloat(numberS[1].value)

      if (number1 > number2){
        var tmp = number1;
        numberS[0].value = number2
        numberS[0].value = tmp
      }

      rangeS[0].value = number1
      rangeS[1].value = number2
    }
  })
})