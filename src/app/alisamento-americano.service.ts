import { Injectable } from '@angular/core';
import { IAlisamentoAmericano, alisamentoAmericano } from './alisamento-americano';
@Injectable({
  providedIn: 'root'
})
export class AlisamentoAmericanoService {

  alisamentoAmericano: IAlisamentoAmericano[] = alisamentoAmericano;    //traz para cá toda a lista de produtos o arquivo que esta detro de produtos.ts que criamos//
  //tem acesso direto aos produtos//
  constructor() { }
  
  //2 metodos abaixo//
  
  getAll(){      //retorna a lista de produtos//
  return this.alisamentoAmericano;
  }
  
  //recebe o Id e só vai retornar o produto com o ID informado//
  getOne(alisamentoAmericanoId: number){
  return this.alisamentoAmericano.find(alisamentoAmericano => alisamentoAmericano.id == alisamentoAmericanoId);
  //o find encontra um produto diante de uma condição//
  }                 //vai encontrar um produto onde o produto.id é igual ao id colocado no paramentro do metodo//
  
          //vai encontrar um produto onde o produto.id é igual ao id colocado no paramentro do metodo//
  
  }
  