// Importando os componentes de página necessários do diretório '../pages'
import { Routes, Route } from 'react-router-dom';
import { New } from '../pages/New';
import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Profile } from '../pages/Profile';

// Definindo o componente funcional AppRoutes, responsável por renderizar as rotas da aplicação
export function AppRoutes(){
    return(
        // Utilizando o componente Routes para definir as rotas da aplicação
        <Routes>
            {/* Rota para a página inicial ('/') que renderiza o componente Home */}
            <Route path="/" element={<Home />}  />
            
            {/* Rota para a página de criação de algo novo ('/new') que renderiza o componente New */}
            <Route path="/new" element={<New />}  />
            
            {/* Rota para a página de perfil ('/profile') que renderiza o componente Profile */}
            <Route path="/profile" element={<Profile />}  />
            
            {/* Rota para a página de detalhes de um item específico ('/details/:id') que renderiza o componente Details */}
            {/* O ':id' é um parâmetro dinâmico que pode ser acessado dentro do componente Details */}
            <Route path="/details/:id" element={<Details />}  />
        </Routes>
    )
}
