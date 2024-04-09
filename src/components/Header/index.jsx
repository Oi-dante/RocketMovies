import { Container, Profile } from "./styles";
import { Input } from "../../components/Input";

import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder="Pesquisar pelo título" />

      <Profile to="/profile">
        <div>
          <strong>Gustavo Barboza</strong>

          <a href="">
            <span>sair</span>
          </a>
        </div>

        <img src="https://github.com/Oi-dante.png" alt="Foto do Usuário" />
      </Profile>
    </Container>
  );
}
