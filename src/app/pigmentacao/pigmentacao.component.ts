import { Component, OnInit } from '@angular/core';
import { IPigmentacao } from '../pigmentacao';
import { PigmentacaoService } from '../pigmentacao.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pigmentacao',
  templateUrl: './pigmentacao.component.html',
  styleUrls: ['./pigmentacao.component.css']
})
export class PigmentacaoComponent implements OnInit {
  //= produtos;   substitui por undefined//
  pigmentacao : IPigmentacao[] | undefined;     // tem que importar o IPproduto, é a interface criada em produtos.ts


constructor(
private pigmentacaoService: PigmentacaoService,  // injetei
private route: ActivatedRoute        // injetei esse route para fazer o metodo da barra de pesquisa//
){}

ngOnInit(): void{
// this.produtos = this.produtosService.getAll()   // vai receber todos os produtos, quando implementei a barra de pesquisa, mudei  essa parte//

const pigmentacao = this.pigmentacaoService.getAll();    ///vai receber todos os produtos

this.route.queryParamMap.subscribe(parms => {       // quando ele ver uma mudança no queryParam ele vai abaixo trazer a descricao //
const descricao = parms.get("descricao")?.toLowerCase();     //esse .toLowerCaser tudo que digitar vai ficar tudo minusculo//
                    //obs para esse ? //
if(descricao){    // o que foi digitado tem descricao, se sim vai fazer um filtro de todos os produtos //
                 //vai verifica em cada produto se essa descricao em minisculo, tem a descricao vinda do quaryParams
this.pigmentacao = pigmentacao.filter(pigmentacao => pigmentacao.descricao.toLowerCase().includes(descricao));
//estes produtos vai receber um filtro nesses produtos que obteve do serviço
return;
}
// se deixar o campo pesquisa vazio, a pagina fica com todos os produtos,
this.pigmentacao = pigmentacao;
});

//agora está recebendo os produtos por meio de um serviço,  //
// as requisições para um backend sao feitas atraves de serviço//
} 

}