import { Token } from 'moo';
import DefaultTable from '../default-table/default-table';
import './lexeme-table.css';

interface LexemeTableProps {
  tokens: Token[];
}

function LexemeTable(props: LexemeTableProps) {
  return (
    <div className="lexeme-table">
      <DefaultTable
        labels={['Lexema', 'Tipo', 'Linha', 'Coluna']}
        columns={['value', 'type', 'line', 'col']}
        data={props.tokens}
      />
    </div>
  );
}

export default LexemeTable;
