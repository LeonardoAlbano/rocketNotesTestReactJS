// Importa o componente estilizado 'Container' do arquivo "./styles"
import { Container } from "./styles";

// Define o componente funcional 'Input' que recebe props, incluindo um ícone (Icon) e outras (rest)
export function Input({ icon: Icon, ...rest }) {
    return (
        // Utiliza o componente estilizado 'Container' como o contêiner principal
        <Container>
            {/* Renderiza o ícone (se fornecido) com um tamanho de 20 pixels */}
            {Icon && <Icon size={20} />}
            
            {/* Renderiza um elemento de input, repassando todas as props recebidas */}
            <input {...rest} />
        </Container>
    );
}
