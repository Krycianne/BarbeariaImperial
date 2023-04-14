export interface IPlatinado {      //leva essa interface para a classe dos produtos
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
  }
  
  export interface IProdutoCarrinho extends IPlatinado{  //vai ter tudo acima e vamos acrescentar abaixo algumas coisas//
  
      quantidade: number;    // quantidade selecioanda na hora da compra//
    
  }
 

  export const platinado: IPlatinado[] = [
    { id: 1, descricao: "Unha em gel", preco: 1200.50, descricaoPreco: "À vista no PIX", imagem:"./assets/platinado/1.jpg", quantidadeEstoque: 2 },
    { id: 2, descricao: "Penteado", preco: 749.99, descricaoPreco: "À vista no PIX", imagem:"./assets/platinado/2.jpg", quantidadeEstoque: 50 },
    { id: 3, descricao: "Maquiagem", preco: 599.99, descricaoPreco: "À vista no PIX", imagem:"./assets/platinado/3.jpg", quantidadeEstoque: 1000},
    { id: 4, descricao: "Unha em gel", preco: 1200.50, descricaoPreco: "À vista no PIX", imagem:"./assets/platinado/4.jpg", quantidadeEstoque: 2 },
    { id: 5, descricao: "Penteado", preco: 749.99, descricaoPreco: "À vista no PIX", imagem:"./assets/platinado/5.jpg", quantidadeEstoque: 50 },
]
  