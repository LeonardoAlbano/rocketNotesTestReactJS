// Importa o ícone de logout 'RiShutDownLine' da biblioteca 'react-icons/ri'.
import { RiShutDownLine } from 'react-icons/ri';

// Importa os componentes estilizados 'Container', 'Profile', 'Logout' do arquivo de estilos associado.
import { Container, Profile, Logout } from "./styles";

// Define o componente funcional 'Header'.
export function Header() {
    // Retorna JSX que representa o cabeçalho da aplicação.
    return (
        // Utiliza o componente estilizado 'Container'.
        <Container>
            {/* Componente estilizado 'Profile' para exibir informações do perfil do usuário. */}
            <Profile to="/profile">
                {/* Imagem do perfil do usuário. */}
                <img src="https://github.com/leonardoalbano.png" alt="Foto do Usuário" />

                {/* Div com informações do perfil. */}
                <div>
                    <span>Bem-vindo</span>
                    <strong>Leonardo Albano</strong>
                </div>
            </Profile>

            {/* Componente estilizado 'Logout' para o botão de logout. */}
            <Logout>
                {/* Ícone de logout */}
                <RiShutDownLine />
            </Logout>
        </Container>
    );
}
