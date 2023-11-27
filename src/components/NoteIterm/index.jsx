// Importando ícones do pacote react-icons/fi
import { FiPlus, FiX } from "react-icons/fi";

// Importando o componente de estilo Container do arquivo "./styles"
import { Container } from "./styles";

// Definindo o componente funcional NoteItem
export function NoteItem({ isNew, value, onClick, ...rest}) {
    return (
        // Utilizando o componente de estilo Container e passando a propriedade isNew
        <Container isNew={isNew}>

            {/* Input para exibir ou editar o valor da nota */}
            <input 
                type="text" 
                value={value}
                // Tornando o input somente leitura se isNew for verdadeiro, caso contrário, editável
                readOnly={isNew}
                {...rest}
            />

            {/* Botão para adicionar ou excluir a nota */}
            <button
                type="button"
                onClick={onClick}
                // Adicionando uma classe condicional com base na propriedade isNew
                className={isNew ? 'button-add' : 'button-delete'}
            >
                {/* Exibindo o ícone FiPlus se isNew for verdadeiro, caso contrário, exibindo FiX */}
                { isNew ? <FiPlus /> : <FiX />}
            </button>

        </Container>
    );
}
