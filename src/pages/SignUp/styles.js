// Importando styled-components para criar componentes estilizados
import styled from "styled-components";

// Importando uma imagem de fundo
import backgroundImg from '../../assets/background.png'

// Estilizando o componente Container
export const Container = styled.div`
    height: 100vh;  // Define a altura do componente para ocupar 100% da altura da viewport

    display: flex;  // Usa o modelo de layout flexbox
    align-items: stretch;  // Estica os filhos para ocupar toda a altura do Container
`;

// Estilizando o componente Form
export const Form = styled.form`
    padding: 0 136px;  // Adiciona preenchimento nas extremidades horizontais

    display: flex;  // Usa o modelo de layout flexbox
    flex-direction: column;  // Define a direção dos filhos para coluna
    justify-content: center;  // Centraliza os filhos verticalmente
    align-items: center;  // Centraliza os filhos horizontalmente

    text-align: center;  // Centraliza o texto

    > h1 {
        font-size: 48px;  // Tamanho da fonte
        color: ${({ theme }) => theme.COLORS.ORANGE};  // Cor do texto obtida do tema
    }

    > h2 {
        font-size: 24px;  // Tamanho da fonte
        margin: 48px 0;  // Adiciona margem na parte superior e inferior
    }

    > p {
        font-size: 14px;  // Tamanho da fonte
        color: ${({ theme }) => theme.COLORS.GRAY_100};  // Cor do texto obtida do tema
    }

    > a {
        margin-top: 124px;  // Adiciona margem na parte superior
        color: ${({ theme }) => theme.COLORS.ORANGE};  // Cor do texto obtida do tema
    }
`;

// Estilizando o componente Background
export const Background = styled.div`
    flex: 1;  // Ocupa todo o espaço disponível
    background: url(${backgroundImg}) no-repeat center center;  // Define a imagem de fundo
    background-size: cover;  // Redimensiona a imagem de fundo para cobrir completamente o componente
`;
