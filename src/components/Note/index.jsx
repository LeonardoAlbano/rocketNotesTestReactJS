// Importa o componente Container do arquivo de estilos "./styles"
import { Container } from "./styles";

// Importa o componente Tag do diretório "../../components/Tag"
import { Tag } from "../../components/Tag";

// Define um componente chamado Note que recebe dados (data) e outras props (rest)
export function Note({ data, ...rest }) {
    // Renderiza o componente Container, repassando todas as props recebidas
    // (incluindo as não especificadas explicitamente)
    return (
        <Container {...rest}>
            {/* Renderiza um título (<h1>) com o título fornecido nos dados */}
            <h1>{data.title}</h1>

            {/* Verifica se existem tags nos dados antes de renderizar o footer */}
            {data.tags && (
                // Renderiza um footer se existirem tags nos dados
                <footer>
                    {/* Mapeia as tags e renderiza um componente Tag para cada uma */}
                    {data.tags.map((tag) => (
                        // O componente Tag recebe uma chave única (key) e o título da tag
                        <Tag key={tag.id} title={tag.name} />
                    ))}
                </footer>
            )}
        </Container>
    );
}
