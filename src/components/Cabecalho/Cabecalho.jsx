import { Link, useLocation } from "react-router-dom";
import {AiFillHome as H} from "react-icons/ai";
import "./Cabecalho.scss"

export default function Cabecalho() {

  const rotaAtual = useLocation();

  console.log("Rota ATUAL: "+ rotaAtual.pathname);

  return (
    <>
      <header className="cabecalho">
       
      <ul>
          <li>
            <Link to="/" className={rotaAtual.pathname == "/" ? "active" : ""}>HOME - <H/></Link>
          </li>
          <li>
            <Link to="/produtos" className={rotaAtual.pathname == "/produtos" ? "active" : ""}>PRODUTOS</Link>
          </li>
          <li>
            <Link to="/cadastrar/produto" className={rotaAtual.pathname == "/cadastrar/produto" ? "active" : ""}>CADASTRAR PRODUTO</Link>
          </li>
        </ul>
      </header>
    </>
  );
}
