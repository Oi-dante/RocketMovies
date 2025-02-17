import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Container, Form, Background } from "./styles";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" type="text" icon={FiUser} />

        <Input placeholder="E-mail" type="text" icon={FiMail} />

        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button title="Cadastrar"></Button>

        <Link to="/">
          <FiArrowLeft /> Voltar para o login
        </Link>
      </Form>
      <Background />
    </Container>
  );
}
