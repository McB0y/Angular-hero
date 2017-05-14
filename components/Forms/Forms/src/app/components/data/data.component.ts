import { Component, OnInit } from '@angular/core';
// Los siguientes modulos deberan ser integrados "forzozamente".
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

    formit: FormGroup;// Esta variable hara one way binding dentro del template en la etiqueta form.
    myObject:Object ={
        name : "Anthony"
        lastName : "Strak",
        age: 23
    };
  constructor() {
   }

  ngOnInit() {
    // I put this here 'cause it's so long & I wanna charge the component first
    this.formit = new FormGroup({
        'name' : new FormControl('Anthony', Validators.required ),// you can pass opcional validations & async validations
        'lastName' : new FormControl('',  Validators.required, Validators.minLength(10) ), // I dont put any kinda defect value.
        'email' : new FormControl ('',  [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")] )
    });
  }

  //Starting with regular expressions and logic by this side.


  // print data on screen.

  getData() {
    console.log(this.formit.value);
    console.log(this.formit);
  }


 // We can set data using the method "setValue()".
 // You only need an Object with
 // The same structure that you form. e.i.

this.formit.setValue(this.myObject)


}
