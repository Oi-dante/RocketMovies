import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";

import { Container, Form } from "./styles";

import { FiArrowLeft } from "react-icons/fi";

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <Link to="/">
              <FiArrowLeft />
              Voltar
            </Link>
            <h1>Novo filme</h1>
          </header>

          <div className="space-input">
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>

          <Textarea placeholder="Observações" />

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="Ficção cientifica" />
              <NoteItem isNew value="Novo marcador" />
            </div>
          </Section>

          <div className="button-line">
            <Button isActive={false} title="Excluir filmes" />
            <Button title="Salvar alterações" />
          </div>
        </Form>
      </main>
    </Container>
  );
}
