// Importando componentes estilizados do arquivo de estilos
import { Container, Form, Background } from "./styles";

import { Link } from 'react-router-dom';

// Importando o componente de Input
import { Input } from "../../components/Input";

// Importando ícones e o componente de botão
import { FiMail, FiLock } from 'react-icons/fi'
import { Button } from "../../components/Button";

// Definição do componente funcional SignIn
export function SignIn() {
    return (
        // Componente Container que envolve todo o conteúdo
        <Container>
            {/* Componente Form que contém o formulário de login */}
            <Form>
                {/* Título principal */}
                <h1>Rocket Notes</h1>
                {/* Descrição da aplicação */}
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                {/* Título do formulário de login */}
                <h2>Faça seu Login</h2>

                {/* Campo de input para o e-mail do usuário */}
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                {/* Campo de input para a senha do usuário */}
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                {/* Botão para realizar o login */}
                <Button title="Entrar" />

                {/* Link para criar uma nova conta (o href="#" geralmente precisa ser substituído pelo link correto) */}
                <Link to="/register">
                    Criar conta
                </Link>
            </Form>

            {/* Componente Background que adiciona uma imagem de fundo */}
            <Background />
        </Container>
    )
}
