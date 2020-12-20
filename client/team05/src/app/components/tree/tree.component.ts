import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  cadena_db: String = ""

  constructor() { 
  }
  
  ngOnInit(): void {
    this.funcion1()

  }

   funcion1() {
    var toggler = document.getElementsByClassName("caret");
    var i;

    for (i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener("click", function () {
        this.parentElement.querySelector(".animacion").classList.toggle("activada");
        this.classList.toggle("caret-down");
      });
    }
  }


  

   refrescar() {
    alert("def showDatabases()")

    let item_db = document.getElementById("db")
    item_db.innerHTML=""

    this.cadena_db = "[basedatos1,basedatos2, basedatos3]";

    // analizando respuesta
    let array = this.analizar(this.cadena_db)
    console.log("data bases : ", array)

    //  actualizando el numero de base de datos 
    let numero_db = document.getElementById("num_db")
    numero_db.innerText = String(array.length)

    for (let i = 0; i < array.length; i++) {
      item_db.innerHTML += '<li><span class="caret">' + array[i] + '</span><ul class="animacion"><li><span class="caret">Tabla []</span><ul class="animacion" id="' + array[i] + '"></ul></li></ul></li>'
    }
    this.funcion1()

  }

  analizar(data) {
    var array = []
    data = data.replace('[', "")
    data = data.replace(']', "")
    var list_data = data.split(',')
    for (let i = 0; i < list_data.length; i++) {
      array.push(list_data[i])
    }
    return array
  }


}
