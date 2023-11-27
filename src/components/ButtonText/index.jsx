// Importa o componente estilizado 'Container' do arquivo de estilos associado.
import { Container } from "./styles";

// Define o componente funcional 'ButtonText'.
// Este componente aceita a propriedade 'title' e quaisquer outras propriedades adicionais (por meio do operador de propagação '...rest').
export function ButtonText({ title, isActive = false, ...rest }) {
    // Retorna JSX que utiliza o componente estilizado 'Container'.
    return (
        // Utiliza o componente 'Container' como um botão do tipo "button".
        <Container 
        type="button"
        $isactive={isActive.toString()}
        
        {...rest}>
            
            {/* Renderiza o título passado como propriedade. */}
            {title}
        </Container>
    );
}
