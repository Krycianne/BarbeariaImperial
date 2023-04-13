import { Injectable } from '@angular/core';
import { IPigmentacao, pigmentacao } from './pigmentacao';

@Injectable({
  providedIn: 'root'
})
export class PigmentacaoService {

  pigmentacao: IPigmentacao[] = pigmentacao;    //traz para cá toda a lista de produtos o arquivo que esta detro de produtos.ts que criamos//
  //tem acesso direto aos produtos//
  constructor() { }
  
  //2 metodos abaixo//
  
  getAll(){      //retorna a lista de produtos//
  return this.pigmentacao;
  }
  
  //recebe o Id e só vai retornar o produto com o ID informado//
  getOne(pigmentacaoId: number){
  return this.pigmentacao.find(pigmentacao => pigmentacao.id == pigmentacaoId);
  //o find encontra um produto diante de uma condição//
  }                 //vai encontrar um produto onde o produto.id é igual ao id colocado no paramentro do metodo//
  
  }
  