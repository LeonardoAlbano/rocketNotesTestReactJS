// Importa a função styled da biblioteca styled-components, 
// que é usada para criar componentes estilizados.
import styled from "styled-components";

// Cria um componente estilizado chamado Container usando a 
// função styled.div
export const Container = styled.div`
  // Define a largura do componente como 100% da largura disponível.
  width: 100%;
  // Define a altura do componente como 100% da altura da viewport.
  height: 100vh;
  
  // Configura o componente como uma grade com duas linhas: 105 pixels para o cabeçalho e o restante para o conteúdo.
  display: grid;
  grid-template-rows: 105px auto;
  // Define as áreas da grade para o cabeçalho e o conteúdo.
  grid-template-areas: 
    "header"
    "content";
  
  // Seleciona o elemento <main> dentro do componente 'Container'.
  >main{
    // Define a área da grade como 'content' para o elemento <main>.
    grid-area: content;
    // Adiciona uma barra de rolagem vertical ao conteúdo se necessário.
    overflow-y: scroll;
    // Adiciona preenchimento superior e inferior ao elemento <main>.
    padding: 64px 0;
  }
`;

// Cria um componente estilizado chamado Links usando a 
// função styled.ul
export const Links = styled.ul`
  // Remove os marcadores de lista padrão.
  list-style: none;

  // Seleciona o elemento <li> dentro do componente 'Links'.
  >li{
    // Adiciona uma margem superior ao elemento <li>.
    margin-top: 12px;

    // Seleciona o elemento <a> dentro do elemento <li>.
    >a{
      // Define a cor do texto do elemento <a> usando a propriedade 'theme', especificamente a cor WHITE.
      color: ${({ theme }) => theme.COLORS.WHITE}
    }
  }
`;

// Cria um componente estilizado chamado Content usando a 
// função styled.div
export const Content = styled.div`
  // Define a largura máxima do conteúdo como 550 pixels e centraliza o conteúdo horizontalmente.
  max-width: 550px;
  margin: 0 auto;

  // Configura o elemento <div> como um contêiner flexível com direção de coluna.
  display: flex;
  flex-direction: column;

  // Seleciona o primeiro botão filho do elemento <div>.
  >button:first-child{
    // Alinha o primeiro botão à extremidade (final) do contêiner.
    align-self: end;
  }

  // Seleciona o elemento <h1> dentro do componente 'Content'.
  >h1{
    // Define o tamanho da fonte do elemento <h1> como 36 pixels.
    font-size: 36px;
    // Define o peso da fonte do elemento <h1> como 500 (semibold).
    font-weight: 500;
    // Adiciona preenchimento superior ao elemento <h1>.
    padding-top: 64px;
  }

  // Seleciona o elemento <p> dentro do componente 'Content'.
  >p{
    // Define o tamanho da fonte do elemento <p> como 16 pixels.
    font-size: 16px;
    // Adiciona margem superior ao elemento <p>.
    margin-top: 16px;
    // Define o alinhamento do texto como justificado.
    text-align: justify;
  }
`;

