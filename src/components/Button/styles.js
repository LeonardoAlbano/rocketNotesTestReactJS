// Importando a biblioteca "styled" do "styled-components"
import styled from "styled-components";

// Criando um componente estilizado chamado "Container", que é uma extensão de um botão HTML
export const Container = styled.button`
    // Definindo a largura do botão como 100% do contêiner pai
    width: 100%;

    // Definindo a cor de fundo do botão usando uma propriedade dinâmica do tema
    background-color: ${({ theme }) => theme.COLORS.ORANGE};

    // Definindo a cor do texto do botão usando uma propriedade dinâmica do tema
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    // Definindo a altura do botão como 56 pixels
    height: 56px;

    // Removendo a borda do botão
    border: 0;

    // Adicionando preenchimento interno ao botão
    padding: 0 16px;

    // Adicionando margem superior ao botão
    margin-top: 16px;

    // Adicionando borda arredondada ao botão
    border-radius: 10px;

    // Definindo o peso da fonte do texto do botão como 500
    font-weight: 500;

    // Estilizando o botão quando estiver desabilitado
    &:disabled {
        // Reduzindo a opacidade do botão quando desabilitado
        opacity: 0.5;
    }
`;
