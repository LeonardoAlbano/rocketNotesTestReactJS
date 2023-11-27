// Importa a biblioteca de estilos 'styled-components'
import styled from "styled-components";

// Define um componente estilizado 'Container' usando a função 'styled' do 'styled-components'
export const Container = styled.div`
    // Estilos gerais do contêiner
    width: 100%; // Largura total
    display: flex; // Exibe os elementos em linha (um ao lado do outro)
    align-items: center; // Centraliza verticalmente os elementos

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900}; // Cor de fundo obtida do tema
    color: ${({ theme }) => theme.COLORS.GRAY_300}; // Cor do texto obtida do tema

    margin-bottom: 8px; // Margem inferior de 8 pixels
    border-radius: 10px; // Borda arredondada com raio de 10 pixels

    // Estiliza o elemento 'input' dentro do contêiner
    > input {
        height: 56px; // Altura do input de 56 pixels
        width: 100%; // Largura total

        padding: 12px; // Preenchimento interno de 12 pixels

        color: ${({ theme }) => theme.COLORS.WHITE}; // Cor do texto obtida do tema
        background: transparent; // Fundo transparente
        border: 0; // Sem borda

        // Estiliza o placeholder (texto temporário quando o input está vazio)
        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300}; // Cor do texto do placeholder obtida do tema
        }
    }

    // Estiliza o elemento 'svg' (ícone) dentro do contêiner
    > svg {
        margin-left: 16px; // Margem à esquerda de 16 pixels
    }
`;
