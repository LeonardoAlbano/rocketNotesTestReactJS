// Importando o componente BrowserRouter para fornecer um contexto de navegação
import { BrowserRouter } from "react-router-dom";

// Importando os componentes de rotas específicas para a aplicação e autenticação
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

// Definindo o componente funcional Routes, que decide qual conjunto de rotas renderizar com base na lógica da aplicação
export function Routes() {
    return (
        // Utilizando o componente BrowserRouter para fornecer um contexto de navegação
        <BrowserRouter>
            {/* 
                Utilizando o componente AppRoutes que contém as rotas principais da aplicação 
                (páginas principais da aplicação após a autenticação, por exemplo).
            */}
            <AppRoutes />
        </BrowserRouter>
    );
}
