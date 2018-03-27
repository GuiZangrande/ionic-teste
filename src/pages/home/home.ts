import { Component } from '@angular/core';
import { Validators,FormBuilder,NgForm } from '@angular/forms';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  cadastro : any={};
  

  constructor(public navCtrl: NavController,public formBuilder:FormBuilder) {
    this.cadastro = this.formBuilder.group({
      nome:['',Validators.required] ,
      peso:['',Validators.required] ,
      altura:['',Validators.required]      
    })
    
  }

  postDados(){
    console.log(this.cadastro.value);
    console.log(this.cadastro.value.nome);



    let el  :HTMLElement ;
    el =document.querySelector('#tabela-pacientes');
    console.log(el);
    
    let pacienteTr= document.createElement("tr");
    pacienteTr.classList.add("paciente");
  

    let tdNome :HTMLElement = document.createElement("td");
    tdNome.textContent = this.cadastro.value.nome;
    tdNome.classList.add("info-nome");


    let tdPeso :HTMLElement = document.createElement("td");
    tdPeso.textContent = this.cadastro.value.peso;
    tdPeso.classList.add("info-peso");

    let tdAltura :HTMLElement = document.createElement("td");
    tdAltura.textContent = this.cadastro.value.altura;
    tdAltura.classList.add("info-altura");

    pacienteTr.appendChild(tdNome);
    pacienteTr.appendChild(tdPeso);
    pacienteTr.appendChild(tdAltura);

    el.appendChild(pacienteTr);

    if (document.querySelector('#form-adiciona')!=null) {

         document.querySelector('#form-adiciona').reset();
    }


  }


  
  






}
