// Importa ícones do React para usar no componente
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Link } from 'react-router-dom';

// Importa componentes reutilizáveis de Input e Button
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

// Importa estilos específicos para o componente Profile
import { Container, Form, Avatar } from "./styles"

// Definição do componente funcional Profile
export function Profile() {
    return (
        // Container principal do componente
        <Container>
            {/* Cabeçalho contendo um link para a página inicial */}
            <header>
                <Link to="/">
                    {/* Ícone de seta para a esquerda */}
                    <FiArrowLeft />
                </Link>
            </header>

            {/* Formulário de perfil */}
            <Form>
                {/* Avatar do usuário */}
                <Avatar>
                    {/* Imagem do usuário */}
                    <img
                        src="https://github.com/leonardoalbano.png"
                        alt="Foto Usuário"
                    />

                    {/* Botão para selecionar uma nova imagem de avatar */}
                    <label htmlFor="avatar">
                        {/* Ícone de câmera */}
                        <FiCamera />

                        {/* Input do tipo file para escolher uma nova imagem */}
                        <input
                            id="avatar"
                            type="file"
                        />
                    </label>
                </Avatar>

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

                {/* Campo de input para a senha atual do usuário */}
                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                />

                {/* Campo de input para a nova senha do usuário */}
                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                />

                {/* Botão para salvar as alterações */}
                <Button title="Salvar" />
            </Form>
        </Container>
    )
}
