import { Injectable } from '@angular/core';
import { IProgressiva, progressiva } from './progressiva';
@Injectable({
  providedIn: 'root'
})
export class ProgressivaService {
  
  progressiva: IProgressiva[] = progressiva;    //traz para cá toda a lista de produtos o arquivo que esta detro de produtos.ts que criamos//
                                       //tem acesso direto aos produtos//
  constructor() { }

  //2 metodos abaixo//

  getAll(){      //retorna a lista de produtos//
    return this.progressiva;
  }

  //recebe o Id e só vai retornar o produto com o ID informado//
  getOne(progressivaId: number){
    return this.progressiva.find(progressiva => progressiva.id == progressivaId);
                        //o find encontra um produto diante de uma condição//
  }                 //vai encontrar um produto onde o produto.id é igual ao id colocado no paramentro do metodo//

}
