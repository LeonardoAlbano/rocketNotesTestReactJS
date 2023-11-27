// Importa ícones específicos (FiPlus, FiSearch) do pacote 'react-icons/fi'
import { FiPlus, FiSearch } from 'react-icons/fi';

// Importa os componentes estilizados do arquivo "./styles"
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

// Importa vários componentes funcionais do diretório "../../components"
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";

// Define o componente funcional 'Home'
export function Home() {
    return (
        // Utiliza o componente estilizado 'Container' como o contêiner principal
        <Container>
            {/* Utiliza o componente estilizado 'Brand' para o logotipo */}
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            {/* Utiliza o componente funcional 'Header' */}
            <Header />

            {/* Utiliza o componente estilizado 'Menu' */}
            <Menu>
                {/* Cria botões de menu com o componente 'ButtonText', marcando o primeiro como ativo */}
                <li><ButtonText title="Todos" isActive /></li>
                <li><ButtonText title="ReactJS" /></li>
                <li><ButtonText title="NodeJS" /></li>
            </Menu>

            {/* Utiliza o componente estilizado 'Search' */}
            <Search>
                {/* Utiliza o componente 'Input' com um ícone de busca */}
                <Input placeholder="pesquisar pelo título" icon={FiSearch} />
            </Search>

            {/* Utiliza o componente estilizado 'Content' */}
            <Content>
                {/* Utiliza o componente 'Section' com o título "Minhas notas" */}
                <Section title="Minhas notas">
                    {/* Utiliza o componente 'Note' com dados específicos */}
                    <Note data={{
                        title: 'React',
                        tags: [
                            { id: '1', name: 'react' },
                            { id: '2', name: 'rocketseat' }
                        ]
                    }} />
                </Section>
            </Content>

            {/* Utiliza o componente estilizado 'NewNote' */}
            <NewNote to="/new">
                {/* Utiliza o ícone 'FiPlus' e texto para criar uma nova nota */}
                <FiPlus />
                Criar nota
            </NewNote>
        </Container>
    );
}
