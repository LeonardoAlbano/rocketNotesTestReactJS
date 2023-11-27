// Importa o componente estilizado 'Container' do arquivo de estilos associado.
import { Container } from "./styles";

// Define o componente funcional 'Section' que recebe propriedades 'title' e 'children'.
export function Section({ title, children }) {
    // Retorna JSX com o componente estilizado 'Container'.
    return (
        <Container>
            {/* Renderiza o título passado como propriedade. */}
            <h2>{title}</h2>

            {/* Renderiza o conteúdo passado como propriedade (children). */}
            {children}
        </Container>
    );
}
