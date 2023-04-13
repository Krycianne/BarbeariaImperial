import { Injectable } from '@angular/core';
import { IPlatinado, platinado } from './platinado';


@Injectable({
  providedIn: 'root'
})
export class PlatinadoService {
  
  platinado: IPlatinado[] = platinado;    //traz para cá toda a lista de produtos o arquivo que esta detro de produtos.ts que criamos//
//tem acesso direto aos produtos//
constructor() { }

//2 metodos abaixo//

getAll(){      //retorna a lista de produtos//
return this.platinado;
}

//recebe o Id e só vai retornar o produto com o ID informado//
getOne(platinadoId: number){
return this.platinado.find(platinado => platinado.id == platinadoId);
//o find encontra um produto diante de uma condição//
}                 //vai encontrar um produto onde o produto.id é igual ao id colocado no paramentro do metodo//

}
