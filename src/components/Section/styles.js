// Importa o módulo 'styled' de 'styled-components', que é uma biblioteca para estilizar componentes no React.
import styled from "styled-components";

// Cria um componente chamado 'Container' usando a sintaxe de template string.
export const Container = styled.section`
    // Define a margem superior e inferior do componente 'Container' como 28 pixels.
    margin: 28px 0;

    // Seleciona o elemento <h2> dentro do componente 'Container'.
    >h2{
        // Adiciona uma borda na parte inferior do <h2>.
        border-bottom-width: 1px ;
        border-bottom-style: solid;
        // Usa a propriedade 'theme' para obter a cor de fundo do tema, especificamente a cor BACKGROUND_700.
        border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

        // Adiciona um preenchimento na parte inferior do <h2>.
        padding-bottom: 16px;
        // Adiciona uma margem na parte inferior do <h2>.
        margin-bottom: 24px;

        // Define a cor do texto do <h2> usando a propriedade 'theme', especificamente a cor GRAY_100.
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        // Define o tamanho da fonte do <h2> como 20 pixels.
        font-size: 20px;
        // Define o peso da fonte do <h2> como 400 (normal).
        font-weight: 400;
    }
`;
