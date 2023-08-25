import { Link } from "react-router-dom";

export default function Construction() {
  return (
    <div className="constructionContainer">
      <h1>Página em construção</h1>
      <p>Esta página ainda está em cosntrução! Volte futuramente para mais detalhes.</p>
      <Link to="/">Voltar à página inicial</Link>
    </div>
  );
}