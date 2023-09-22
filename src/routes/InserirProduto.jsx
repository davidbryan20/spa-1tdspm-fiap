import { unstable_renderSubtreeIntoContainer } from "react-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import { useState } from "react";

export default function InserirProduto() {
    document.title = "CADASTRAR";

    //Gerando um novo ID
    let novoId = (ListaProdutos[ListaProdutos.length - 1].id + 1);

    const [produto, setProduto] = useState({
        id:novoId,
        nome:"",
        desc:"",
        valor:""
});

  return (
    <div>
        <h1>Cadastro de Produtos</h1>
    </div>
  )
}
