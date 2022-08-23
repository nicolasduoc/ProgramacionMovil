import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  //VAMOS A CREAR NUESTRO ALUMNO:
  alumno = new FormGroup({
    rut: new FormControl('', [Validators.required, Validators.pattern('[0-9]{1,2}.[0-9]{3}.[0-9]{3}-[0-9kK]{1}')]),
    nom_completo: new FormControl(''),
    fecha_nac: new FormControl(''),
    semestre: new FormControl(''),
    password: new FormControl('')
  })

  constructor() { }

  ngOnInit() {
  }

}
