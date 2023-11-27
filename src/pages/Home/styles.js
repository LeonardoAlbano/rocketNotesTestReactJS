// Importa a função 'styled' da biblioteca styled-components
import styled from "styled-components";
import { Link } from 'react-router-dom';

// Define o componente estilizado 'Container'
export const Container = styled.div`
    // Configurações de layout usando grid
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 105px 128px auto 64px;
    grid-template-areas: 
        "brand header"
        "menu search"
        "menu content"
        "newnote content";

    // Usa a propriedade 'background-color' para aplicar a cor de fundo do tema
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

// Define o componente estilizado 'Brand'
export const Brand = styled.div`
    // Define a área do grid para este componente
    grid-area: brand;
    
    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom-width:1px ;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    >h1{
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }


`;

// Define o componente estilizado 'Menu'
export const Menu = styled.ul`
    // Define a área do grid para este componente
    grid-area: menu;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    padding-top: 64px;
    text-align: center;
    

    >li{
        margin-bottom: 24px;
    }
`;

// Define o componente estilizado 'Search'
export const Search = styled.div`
    // Define a área do grid para este componente
    grid-area: search;
    padding: 64px 64px 0;

`;

// Define o componente estilizado 'Content'
export const Content = styled.div`
    // Define a área do grid para este componente
    grid-area: content;

    padding: 0 64px ;
    overflow-y: auto;

`;

// Define o componente estilizado 'NewNote' que é um botão
export const NewNote = styled(Link)`
    // Define a área do grid para este componente
    grid-area: newnote;

    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    >svg{
        margin-right: 8px;
    }
`;
