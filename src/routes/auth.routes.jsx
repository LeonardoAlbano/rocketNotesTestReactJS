// Importando os componentes de página necessários do diretório '../pages'
import { Routes, Route } from 'react-router-dom';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

// Definindo o componente funcional AuthRoutes, responsável por renderizar as rotas de autenticação
export function AuthRoutes() {
    return (
        // Utilizando o componente Routes para definir as rotas de autenticação
        <Routes>
            {/* Rota para a página de login ('/') que renderiza o componente SignIn */}
            <Route path="/" element={<SignIn />} />

            {/* Rota para a página de registro ('/register') que renderiza o componente SignUp */}
            <Route path="/register" element={<SignUp />} />
        </Routes>
    );
}
