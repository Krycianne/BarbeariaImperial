export interface ICorte {      //leva essa interface para a classe dos produtos
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
  }

  export interface IProdutoCarrinho extends ICorte{  //vai ter tudo acima e vamos acrescentar abaixo algumas coisas//

      quantidade: number;    // quantidade selecioanda na hora da compra//

  }


  export const corte: ICorte[] = [
    { id: 1, descricao: "Corte na tesoura", preco: 1200.50, descricaoPreco: "À vista no PIX", imagem:"./assets/corte/1.jpg", quantidadeEstoque: 2 },
    { id: 2, descricao: "Degradê na 0.5", preco: 749.99, descricaoPreco: "À vista no PIX", imagem:"./assets/corte/2.jpg", quantidadeEstoque: 50 },
    { id: 3, descricao: "Degradê na 0", preco: 599.99, descricaoPreco: "À vista no PIX", imagem:"./assets/corte/3.jpg", quantidadeEstoque: 1000},
    { id: 4, descricao: "Degradê na 1", preco: 1200.50, descricaoPreco: "À vista no PIX", imagem:"./assets/corte/4.jpg", quantidadeEstoque: 2 },
    { id: 5, descricao: "High fade", preco: 749.99, descricaoPreco: "À vista no PIX", imagem:"./assets/corte/5.jpg", quantidadeEstoque: 50 },
    { id: 6, descricao: "Mid fade", preco: 599.99, descricaoPreco: "À vista no PIX", imagem:"./assets/corte/6.jpg", quantidadeEstoque: 1000},
    { id: 7, descricao: "Moicano antigo", preco: 599.99, descricaoPreco: "À vista no PIX", imagem:"./assets/corte/7.jpg", quantidadeEstoque: 1000},
    { id: 8, descricao: "Moicano disfaçado oval em v", preco: 599.99, descricaoPreco: "À vista no PIX", imagem:"./assets/corte/8.jpg", quantidadeEstoque: 1000},
    { id: 9, descricao: "Moicano disfarçado oval", preco: 599.99, descricaoPreco: "À vista no PIX", imagem:"./assets/corte/9.jpg", quantidadeEstoque: 1000},
    { id: 10, descricao: "Moicano em v", preco: 599.99, descricaoPreco: "À vista no PIX", imagem:"./assets/corte/10.jpg", quantidadeEstoque: 1000},
    { id: 11, descricao: "Social na 2", preco: 599.99, descricaoPreco: "À vista no PIX", imagem:"./assets/corte/11.jpg", quantidadeEstoque: 1000},
    { id: 12, descricao: "Taper fade", preco: 599.99, descricaoPreco: "À vista no PIX", imagem:"./assets/corte/12.jpg", quantidadeEstoque: 1000},


  ]
