export interface IFreeStyle {      //leva essa interface para a classe dos produtos
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
  }
  
  export interface IProdutoCarrinho extends IFreeStyle{  //vai ter tudo acima e vamos acrescentar abaixo algumas coisas//

      quantidade: number;    // quantidade selecioanda na hora da compra//
    
  }
 

  export const freeStyle: IFreeStyle[] = [
    { id: 1, descricao: "Unha em gel", preco: 1200.50, descricaoPreco: "À vista no PIX", imagem:"./assets/freestyle/1.jpg", quantidadeEstoque: 2 },
    { id: 2, descricao: "Penteado", preco: 749.99, descricaoPreco: "À vista no PIX", imagem:"./assets/freestyle/2.jpg", quantidadeEstoque: 50 },
    { id: 3, descricao: "Maquiagem", preco: 599.99, descricaoPreco: "À vista no PIX", imagem:"./assets/freestyle/3.jpg", quantidadeEstoque: 1000},
    { id: 4, descricao: "Unha em gel", preco: 1200.50, descricaoPreco: "À vista no PIX", imagem:"./assets/freestyle/4.jpg", quantidadeEstoque: 2 },
    { id: 5, descricao: "Penteado", preco: 749.99, descricaoPreco: "À vista no PIX", imagem:"./assets/freestyle/5.jpg", quantidadeEstoque: 50 },
    { id: 6, descricao: "Maquiagem", preco: 599.99, descricaoPreco: "À vista no PIX", imagem:"./assets/freestyle/6.jpg", quantidadeEstoque: 1000},
]
  