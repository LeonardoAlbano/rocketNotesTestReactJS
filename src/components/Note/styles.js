import styled from "styled-components";

// Define um componente estilizado chamado 'Container' usando a função 'styled' do 'styled-components'
export const Container = styled.button`
    // Estilo do botão
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700}; // Cor de fundo do botão obtida do tema

    border: none; // Nenhuma borda
    border-radius: 10px; // Borda arredondada com raio de 10 pixels

    padding: 22px; // Preenchimento interno de 22 pixels
    margin-bottom: 16px; // Margem inferior de 16 pixels

    > h1 {
        // Estilo do título dentro do botão
        flex: 1; // Ocupa todo o espaço disponível
        text-align: left; // Alinhamento do texto à esquerda
        font-weight: 700; // Peso da fonte (negrito)
        font-size: 24px; // Tamanho da fonte de 24 pixels
        color: ${({ theme }) => theme.COLORS.WHITE}; // Cor do texto obtida do tema
    }

    > footer {
        // Estilo do rodapé dentro do botão
        width: 100%; // Largura total
        display: flex; // Exibe os elementos em linha (um ao lado do outro)
        margin-top: 24px; // Margem superior de 24 pixels
    }
`;
