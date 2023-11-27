// Importa a função 'styled' da biblioteca 'styled-components'.
import styled from "styled-components";
import { Link } from 'react-router-dom';

// Cria um componente estilizado chamado 'Container' usando a função 'styled.header'.
export const Container = styled.header`
    // Define a área da grade como 'header'.
    grid-area: header;

    // Define a altura do componente como 105 pixels e a largura como 100%.
    height: 105px;
    width: 100%;

    // Adiciona uma borda na parte inferior do componente.
    border-bottom-width: 1px;
    border-bottom-style: solid;
    // Usa a propriedade 'theme' para obter a cor de fundo do tema, especificamente a cor BACKGROUND_700.
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    // Configura o layout flexível com espaçamento justificado entre os itens.
    display: flex;
    justify-content: space-between;

    // Adiciona preenchimento à esquerda e à direita do componente.
    padding: 0 80px;

    // Define a cor de fundo do componente como sandybrown.
    background: sandybrown;
`;

// Cria um componente estilizado chamado 'Profile'.
export const Profile = styled(Link)`
    // Configura o layout flexível com itens centralizados verticalmente.
    display: flex;
    align-items: center;

    // Seleciona a tag <img> dentro do componente 'Profile'.
    >img{
        // Define a largura e a altura da imagem como 56 pixels.
        width: 56px;
        height: 56px;
        // Adiciona um raio de borda para tornar a imagem circular.
        border-radius: 50%;
    }

    // Seleciona a tag <div> dentro do componente 'Profile'.
    >div{
        // Configura o layout flexível com direção de coluna.
        display: flex;
        flex-direction: column;
        // Adiciona margem à esquerda.
        margin-left: 16px;
        // Define a altura da linha como 24 pixels.
        line-height: 24px;

        // Seleciona a tag <span> dentro da <div> do componente 'Profile'.
        span{
            // Define o tamanho da fonte como 16 pixels.
            font-size: 16px;
            // Usa a propriedade 'theme' para obter a cor de texto do tema, especificamente a cor GRAY_100.
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        // Seleciona a tag <strong> dentro da <div> do componente 'Profile'.
        strong{
            // Define o tamanho da fonte como 18 pixels.
            font-size: 18px;
            // Usa a propriedade 'theme' para obter a cor de texto do tema, especificamente a cor WHITE.
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`;

// Cria um componente estilizado chamado 'Logout'.
export const Logout = styled.button`
    // Remove a borda e o fundo do botão.
    border:none;
    background: none;

    // Seleciona a tag <svg> dentro do componente 'Logout'.
    >svg{
        // Usa a propriedade 'theme' para obter a cor de texto do tema, especificamente a cor GRAY_100.
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        // Define o tamanho da fonte como 36 pixels.
        font-size: 36px;
    }
`;
