import { Link } from "react-router-dom";
import {AiFillHome as H} from "react-icons/ai";
import "./Cabecalho.scss"

export default function Cabecalho() {
  return (
    <>
      <header>
        <h1>Vite + React / Coded By - RM551236</h1>
        <ul>
          <li>
            <Link to="/">HOME - <H/></Link>
          </li>
          <li>
            <Link to="/produtos">PRODUTOS</Link>
          </li>
          <li>
            <Link to="/cadastrar/produto">CADASTRAR PRODUTO</Link>
          </li>
        </ul>
      </header>
    </>
  );
}
