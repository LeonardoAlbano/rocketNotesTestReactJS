// Importa a biblioteca styled-components para estilizar componentes React
import styled from "styled-components";

// Estiliza um componente div chamado Container
export const Container = styled.div`
    width: 100%;  // Ocupa 100% da largura do contêiner pai

    >header {
        width: 100%;  // Ocupa 100% da largura do componente header
        height: 144px;  // Altura fixa de 144 pixels

        background: ${({ theme }) => theme.COLORS.BACKGROUND_900};  // Cor de fundo obtida do tema

        display: flex;  // Usa o modelo de layout flexbox
        align-items: center;  // Centraliza os itens verticalmente
        padding: 0 124px;  // Adiciona preenchimento de 0 nas extremidades horizontais e 124 pixels no meio

        svg {
            color: ${({ theme }) => theme.COLORS.GRAY_100};  // Cor do ícone obtida do tema
            font-size: 24px;  // Tamanho da fonte do ícone
        }
    }
`;

// Estiliza um componente form chamado Form
export const Form = styled.form`
    max-width: 340px;  // Largura máxima de 340 pixels
    margin: 30px auto 0;  // Margens superior e inferior, auto para centralizar horizontalmente

    >div:nth-child(4) {
        margin-top: 24px;  // Margem superior de 24 pixels para o quarto filho direto
    }
`;

// Estiliza um componente div chamado Avatar
export const Avatar = styled.div`
    position: relative;  // Posição relativa para que os elementos internos possam ser posicionados em relação a ele
    margin: -128px auto 32px;  // Margens superior e inferior, auto para centralizar horizontalmente, -128px para ajustar o posicionamento vertical

    width: 186px;  // Largura fixa de 186 pixels
    height: 186px;  // Altura fixa de 186 pixels

    >img {
        width: 186px;  // Largura da imagem igual à largura do contêiner
        height: 186px;  // Altura da imagem igual à altura do contêiner
        border-radius: 50%;  // Bordas arredondadas para criar uma forma de círculo
    }

    >label {
        width: 48px;  // Largura fixa de 48 pixels
        height: 48px;  // Altura fixa de 48 pixels

        background-color: ${({ theme }) => theme.COLORS.ORANGE};  // Cor de fundo obtida do tema
        border-radius: 50%;  // Bordas arredondadas para criar uma forma de círculo

        display: flex;  // Usa o modelo de layout flexbox
        align-items: center;  // Centraliza os itens verticalmente
        justify-content: center;  // Centraliza os itens horizontalmente

        position: absolute;  // Posição absoluta em relação ao contêiner pai
        bottom: 7px;  // 7 pixels de distância do fundo
        right: 7px;  // 7 pixels de distância da direita

        cursor: pointer;  // Altera o cursor para indicar interatividade

        > input {
            display: none;  // Esconde o input associado
        }

        svg {
            width: 20px;  // Largura do ícone
            height: 20px;  // Altura do ícone
            color: ${({ theme }) => theme.COLORS.BACKGROUND_800};  // Cor do ícone obtida do tema
        }
    }
`;
