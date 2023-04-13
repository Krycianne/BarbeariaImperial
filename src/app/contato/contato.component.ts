import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ContatoService } from '../contato.service';
import { Contato } from '../contato';
declare let Email: any;

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {

  formContato = this.fb.group({
    nome: ["", [
      Validators.minLength(4),  //tamnaho minimo
      Validators.required     //significa que o nome é obrigatorio
    ]],
    assunto:["", [
      Validators.minLength(10),
      Validators.required

  ]],

    telefone: ["", [
       Validators.minLength(11),
       Validators.required

    ]],
     email: ["", [
      Validators.email,
      Validators.required
     ]],

     mensagem:["", [
      Validators.minLength(20),
      Validators.required
     ]]
  })

  envio: Contato = new Contato();


  constructor(private fb:FormBuilder,
    private contato: ContatoService){
  }


  enviarFormulario(){

    Email.send({
      Host : "smtp.elasticemail.com",
      Username : 'margareth.aliendres@gmail.com',
      Password : "DCB379799A56060716A52339A9A2955A31CB",
      To : 'margareth.aliendres@gmail.com',
      From : 'margareth.aliendres@gmail.com',
      Subject : this.envio.assunto,
      Body : `
       <br/> <b>Nome: </b>${this.envio.nome} <br /> <b>Email: </b>${this.envio.email}<br /> <b>Telefone:</b>  ${this.envio.telefone} <br /> <b>Assunto: </b>${this.envio.assunto}<br /> <b>Mensagem:</b>  ${this.envio.mensagem}<br />  <b>Fim da mensagem.
       </b> `
}).then( (mensagem: any) => {alert(mensagem); } );
  
    alert("formulario enviado com sucesso");
    this.formContato.reset()
  }

}
   
    
  
  



