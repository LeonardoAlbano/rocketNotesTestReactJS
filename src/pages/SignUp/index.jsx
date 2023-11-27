// Importando componentes estilizados e estilos específicos para SignUp
import { Container, Form, Background } from "./styles";

import { Link } from 'react-router-dom';

// Importando componente de Input
import { Input } from "../../components/Input";

// Importando ícones e componente de botão
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Button } from "../../components/Button";

// Definição do componente funcional SignUp
export function SignUp() {
    return (
        // Container principal do componente SignUp
        <Container>
            {/* Componente de fundo estilizado */}
            <Background />

            {/* Formulário de cadastro */}
            <Form>
                {/* Título principal */}
                <h1>Rocket Notes</h1>
                {/* Descrição da aplicação */}
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                {/* Título do formulário de cadastro */}
                <h2>Crie sua Conta</h2>

                {/* Campo de input para o nome do usuário */}
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />

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

                {/* Botão para cadastrar */}
                <Button title="Cadastrar" />

                {/* Link para voltar para a página de login (o href="#" geralmente precisa ser substituído pelo link correto) */}
                <Link to="/">
                    Voltar para login
                </Link>
            </Form>
        </Container>
    );
}
