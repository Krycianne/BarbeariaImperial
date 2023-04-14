export interface IProgressiva {      //leva essa interface para a classe dos produtos
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
  }
  
  export interface IProdutoCarrinho extends IProgressiva{  //vai ter tudo acima e vamos acrescentar abaixo algumas coisas//
  
      quantidade: number;    // quantidade selecioanda na hora da compra//
    
  }
 

  export const progressiva: IProgressiva[] = [
    { id: 1, descricao: "Unha em gel", preco: 1200.50, descricaoPreco: "À vista no PIX", imagem:"./assets/progressiva/1.jpg", quantidadeEstoque: 2 },
    { id: 2, descricao: "Penteado", preco: 749.99, descricaoPreco: "À vista no PIX", imagem:"./assets/progressiva/2.jpg", quantidadeEstoque: 50 },
    { id: 3, descricao: "Maquiagem", preco: 599.99, descricaoPreco: "À vista no PIX", imagem:"./assets/progressiva/3.jpg", quantidadeEstoque: 1000},
    { id: 4, descricao: "Unha em gel", preco: 1200.50, descricaoPreco: "À vista no PIX", imagem:"./assets/progressiva/4.jpg", quantidadeEstoque: 2 },
  ]
  