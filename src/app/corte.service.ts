import { Injectable } from '@angular/core';
import { ICorte, corte } from './corte';

@Injectable({
  providedIn: 'root'
})
export class CorteService {

  
  corte: ICorte[] = corte;    //traz para cá toda a lista de produtos o arquivo que esta detro de produtos.ts que criamos//
  //tem acesso direto aos produtos//
  constructor() { }
  
  //2 metodos abaixo//
  
  getAll(){      //retorna a lista de produtos//
  return this.corte;
  }
  
  //recebe o Id e só vai retornar o produto com o ID informado//
  getOne(corteId: number){
  return this.corte.find(corte => corte.id == corteId);
  //o find encontra um produto diante de uma condição//
  }                 //vai encontrar um produto onde o produto.id é igual ao id colocado no paramentro do metodo//
  
          //vai encontrar um produto onde o produto.id é igual ao id colocado no paramentro do metodo//
  
  }
  