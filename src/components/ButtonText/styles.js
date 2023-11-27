// Importa a função 'styled' da biblioteca 'styled-components'.
import styled from "styled-components";

// Cria um componente estilizado chamado 'Container' usando a função 'styled.button'.
export const Container = styled.button`
    // Define o fundo do botão como transparente.
    background: none;
    
    // Usa a propriedade 'theme' para obter a cor de texto do tema, especificamente a cor ORANGE.
    color: ${({ theme, $isactive }) => $isactive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};

    // Remove a borda do botão.
    border: none;

    // Define o tamanho da fonte como 16 pixels.
    font-size: 16px;
`;
