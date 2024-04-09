import { FiPlus, FiSearch } from "react-icons/fi";
import { Container, Content, HeaderPage } from "./styles";
import { Link } from "react-router-dom";
import { Note } from "../../components/Note";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <HeaderPage>
            <h1>Meus Filmes</h1>
            <Link to="/new">
              <Button title="Adicionar filme" icon={FiPlus} />
            </Link>
          </HeaderPage>

          <Link to="details/1">
            <Note
              data={{
                title: "Interestellar",
                tags: [
                  { id: "1", name: "Ficção Cientifica" },
                  { id: "2", name: "Drama" },
                  { id: "3", name: "Familia" },
                ],
              }}
            />
          </Link>

          <Link to="details/1">
            <Note
              data={{
                title: "Interestellar",
                tags: [
                  { id: "1", name: "Ficção Cientifica" },
                  { id: "2", name: "Drama" },
                  { id: "3", name: "Familia" },
                ],
              }}
            />
          </Link>
          
          <Link to="details/1">
            <Note
              data={{
                title: "Interestellar",
                tags: [
                  { id: "1", name: "Ficção Cientifica" },
                  { id: "2", name: "Drama" },
                  { id: "3", name: "Familia" },
                ],
              }}
            />
          </Link>
        </Content>
      </main>
    </Container>
  );
}
