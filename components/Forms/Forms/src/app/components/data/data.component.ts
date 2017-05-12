import { Component, OnInit } from '@angular/core';
// Los siguientes modulos deberan ser integrados "forzozamente".
import { FormGroup, FormControl, Validators } form '@angular/forms'

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

    forma: FormGroup;// Esta variable hara one way binding dentro del template en la etiqueta form.

  constructor() {

   }

  ngOnInit() {
    // I put this here 'cause it's so long & I wanna charge the component first
    this.form = new FormGroup({
        'name' : new FormControl('Rafael'),// you can pass opcional validations & async validations
        'lastName' : new FormControl(), // I dont put any kinda defect value.
        'correo' : new FormControl ()
    })
  }

  //Starting with regular expressions and logic by this side.



}
