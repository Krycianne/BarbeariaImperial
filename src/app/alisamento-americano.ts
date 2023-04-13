export interface IAlisamentoAmericano {      //leva essa interface para a classe dos produtos
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
  }
  
  export interface IProdutoCarrinho extends IAlisamentoAmericano{  //vai ter tudo acima e vamos acrescentar abaixo algumas coisas//
  
      quantidade: number;    // quantidade selecioanda na hora da compra//
    
  }
 

  export const alisamentoAmericano: IAlisamentoAmericano[] = [
    { id: 1, descricao: "Unha em gel", preco: 1200.50, descricaoPreco: "À vista no PIX", imagem:"./assets/alisamentoamericano/1.jpg", quantidadeEstoque: 2 },
    { id: 2, descricao: "Penteado", preco: 749.99, descricaoPreco: "À vista no PIX", imagem:"./assets/alisamentoamericano/2.jpg", quantidadeEstoque: 50 },
    
]
  