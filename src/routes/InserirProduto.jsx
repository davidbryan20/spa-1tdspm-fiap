import { ListaProdutos } from "../components/ListaProdutos";

export default function InserirProduto() {
    document.title = "CADASTRAR";

    //Gerando um novo ID
    let novoId = (ListaProdutos[ListaProdutos.length - 1].id + 1);

    

  return (
    <div>
        <h1>Cadastro de Produtos</h1>
    </div>
  )
}
