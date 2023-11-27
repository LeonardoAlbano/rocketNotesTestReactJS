// Importa a função 'styled' da biblioteca 'styled-components'.
import styled from "styled-components";

// Cria um componente estilizado chamado 'Container' usando a função 'styled.span'.
export const Container = styled.span`
    // Define o tamanho da fonte como 12 pixels.
    font-size: 12px;

    // Adiciona preenchimento de 5 pixels na parte superior e inferior e 14 pixels nas laterais.
    padding: 5px 14px;

    // Adiciona borda arredondada com raio de 5 pixels.
    border-radius: 5px;

    // Adiciona margem à direita de 6 pixels.
    margin-right: 6px;

    // Define a cor do texto usando a propriedade 'theme', especificamente a cor BACKGROUND_900.
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    // Define a cor de fundo usando a propriedade 'theme', especificamente a cor ORANGE.
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
`;
