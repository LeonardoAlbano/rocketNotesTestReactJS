// Importa o componente "Container" do arquivo de estilos
import { Container } from './styles';

// Cria e exporta a função do componente "Button"
export function Button({ title, loading = false, ...rest }) {

    // Retorna o componente "Container"
    return (
        // Define o tipo do botão como "button"
        // Desabilita o botão se a propriedade "loading" estiver definida como true
        // Propaga as outras propriedades (props) não explicitamente desestruturadas (title e loading)
    <Container    
        {...rest} 
        type="button"
        disabled={loading}
    >
        {/* Exibe o texto "Carregando..." se a propriedade "loading" for true, caso contrário, exibe o texto fornecido pela propriedade "title" */}
        {loading ? 'Carregando...' : title}
    </Container>
    );
};
